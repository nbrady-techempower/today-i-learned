import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import marked from "marked";
import styled from "styled-components";
import config from "../config";
import AuthorCallout from "../components/AuthorCallout";
// import { useGlobalContext } from "../providers/GlobalContextProvider";

export default function BlogView({ blog, nextBlog, prevBlog }) {
  // const context = useGlobalContext();
  const [text, setText] = useState();

  useEffect(() => {
    async function getBlog() {
      let data = await fetch(`/assets/blogs/${blog.slug}/index.md`);
      setText(await data.text());
    }

    getBlog();
  }, [blog.slug]);

  return (
    <Wrapper>
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
            <Link to={prevBlog.slug}>← {prevBlog.title}</Link>
          </div>
        )}
        {nextBlog && (
          <div className="flex-1">
            <Link to={nextBlog.slug}>{nextBlog.title} →</Link>
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
    }
  }
`;
