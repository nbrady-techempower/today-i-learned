import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import config from "../config";
import blogEntries from "../config/blogEntries";
import AuthorCallout from "../components/AuthorCallout";
import { useGlobalContext } from "../providers/GlobalContextProvider";
import Tags from "../components/Tags";

let availableTags = [];
blogEntries.forEach((b) => (availableTags = availableTags.concat(b.tags)));
availableTags = Array.from(new Set(availableTags));

export default function HomeView(props) {
  const [state, actions] = useGlobalContext();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Wrapper>
      <header className="flex-row flex-jcc flex-aic">
        <div className="title-font blog-name flex-1">{config.blogTitle}</div>
        <Link to="/light-theme">
          <img src="/assets/images/theme-toggle.png" alt="theme toggle" />
        </Link>
      </header>
      <AuthorCallout />

      <div className="c-pointer filter-group">
        <div
          className="filter-header flex-row flex-aic"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Triangle orientation={showFilters ? "down" : "right"} />
          Filter Posts by Tags
          {!!state.filterByTags.length && (
            <span
              className="c-pointer ml-10"
              onClick={(e) => {
                e.stopPropagation();
                actions.clearFilters();
              }}
            >
              (Clear All)
            </span>
          )}
        </div>
        {showFilters && <Tags tags={availableTags} />}
      </div>

      {blogEntries.map((b, idx) => {
        if (state.filterByTags.length > 0) {
          // this post doesn't have tags
          if (!b.tags) return <></>;
          // if the post has at least one tag in filterByTags, show it
          let found;
          for (let i = 0; i < state.filterByTags.length; i++) {
            if (b.tags.includes(state.filterByTags[i])) {
              found = true;
            }
          }
          if (!found) return <></>;
        }
        return (
          <div className="post" key={idx}>
            <div className="title-font post-title">
              <Link to={"/" + b.slug}>{b.title}</Link>
            </div>
            <div className="post-stats flex-row flex-aic">
              <div className="date">{b.date}</div>
            </div>
            <div className="preview">{b.preview}</div>
            <Tags tags={b.tags} />
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  header {
    color: white;
    font-size: 2rem;
    line-height: 2.6rem;
    margin-bottom: 2.25rem;
    img {
      height: 38px;
      margin-top: 10px;
    }
  }
  .filter-group {
    margin-bottom: 1rem;
    .filter-header {
      font-size: 0.85rem;
    }
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

const Triangle = styled.div`
  width: 0;
  height: 0;
  margin-right: 5px;
  ${({ orientation }) => {
    if (orientation === "right") {
      return `
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 6px solid #d47ee9;
      `;
    }
    if (orientation === "down") {
      return `
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #d47ee9;
      `;
    }
  }}
`;
