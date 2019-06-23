import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import config from "../config";
import blogEntries from "../config/blogEntries";
import AuthorCallout from "../components/AuthorCallout";
// import { useGlobalContext } from "../providers/GlobalContextProvider";

export default function HomeView(props) {
  // const context = useGlobalContext();

  return (
    <Wrapper>
      <div className="title-font blog-name">{config.blogTitle}</div>
      <AuthorCallout />
      {blogEntries.map((b, idx) => {
        return (
          <div className="post" key={idx}>
            <div className="title-font post-title">
              <Link to={"/" + b.slug}>{b.title}</Link>
            </div>
            <div className="post-stats flex-row flex-aic">
              <div className="date">{b.date}</div>
            </div>
            <div className="preview">{b.preview}</div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-name {
    color: white;
    font-size: 2rem;
    line-height: 2.6rem;
    margin-bottom: 2.25rem;
  }
  .post {
    margin-bottom: 3.5rem;
    .post-title {
      color: #d47ee9;
      font-size: 1.65rem;
      margin-bottom: 0.6rem;
    }
    .post-stats {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
  }
`;
