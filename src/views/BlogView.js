import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "@reach/router";
import marked from "marked";
import styled from "styled-components";
import config from "../config";
import AuthorCallout from "../components/AuthorCallout";
// import { useGlobalContext } from "../providers/GlobalContextProvider";

const html = document.querySelector("html");
const getReaderPerc = () => {
  const totalHeight = html.scrollHeight;
  const currHeight = window.pageYOffset + html.clientHeight;
  return Math.round((currHeight / totalHeight) * 100);
};

export default function BlogView({ blog, nextBlog, prevBlog }) {
  // const context = useGlobalContext();
  const [text, setText] = useState();
  const [readerPerc, setReaderPerc] = useState(0);

  useEffect(() => {
    async function getBlog() {
      let data = await fetch(`/assets/blogs/${blog.slug}/index.md`);
      setText(await data.text());
      // let the DOM paint what we fetched. Doing this right away isn't
      // enough time to set the readPerc in the right spot. I've tried
      // doing a MutationObserver, but it has the same problem.
      setTimeout(() => setReaderPerc(getReaderPerc()), 100);
    }

    getBlog();
  }, [blog.slug]);

  useLayoutEffect(() => {
    const onScroll = () => setReaderPerc(getReaderPerc());
    window.addEventListener("scroll", onScroll, false);

    return function() {
      window.removeEventListener("scroll", onScroll, false);
    };
  }, []);

  return (
    <Wrapper>
      <ReaderBar readerPerc={readerPerc} />
      <div className="blog-title title-font">
        <Link to={"/"}>{config.blogTitle}</Link>
      </div>

      <div className="post-header">
        <div className="post-title title-font">{blog.title}</div>
        <div className="date">{blog.date}</div>
      </div>
      {text && (
        <div
          className="post-text colored-links"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />
      )}
      <div className="blog-title title-font blog-title-bottom">
        <Link to={"/"}>{config.blogTitle}</Link>
      </div>
      <AuthorCallout />
      <div className="more-posts flex-row-wrap colored-links">
        {prevBlog && (
          <div className="flex-1">
            <Link to={"/" + prevBlog.slug}>← {prevBlog.title}</Link>
          </div>
        )}
        {nextBlog && (
          <div className="flex-1">
            <Link to={"/" + nextBlog.slug}>{nextBlog.title} →</Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-title {
    color: #d47ee9;
    font-size: 1.3rem;
    margin-bottom: 4.5rem;
  }
  .blog-title-bottom {
    margin-bottom: 2rem;
  }
  .post-header {
    margin-bottom: 3rem;
    .post-title {
      font-size: 2.3rem;
      margin-bottom: 0.5rem;
      color: white;
    }
    .date {
      font-size: 0.8rem;
    }
  }
  .post-text {
    line-height: 1.8rem;
    margin-bottom: 4.5rem;
    img {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      max-width: 90%;
    }
    code {
      font-size: 1.2rem;
      background-color: #373c49;
      border-radius: 3px;
      padding: 0.2rem 0.4rem;
    }
  }
`;

const ReaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  width: ${(props) => props.readerPerc}%;
  background: #d47ee9;
`;
