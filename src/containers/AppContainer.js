/**
 * Handles top level routing and manages the global state of our
 * application using react context.
 */

import React from "react";
import { Router } from "@reach/router";
import { GlobalContextProvider } from "../providers/GlobalContextProvider";
import HomeView from "../views/HomeView";
import BlogView from "../views/BlogView";
import blogEntries from "../config/blogEntries";
import styled from "styled-components";
import config from "../config";

export default function AppContainer(props) {
  return (
    <GlobalContextProvider>
      <Wrapper className="h-100 flex-col">
        <Router className="flex-1">
          <HomeView path="/" />
          <BlogView
            key={-1}
            path="/light-theme"
            blog={{
              title: "A Light Theme?",
              date: "Never",
              slug: "light-theme"
            }}
          />
          {blogEntries.map((b, idx, entries) => (
            <BlogView
              key={idx}
              path={`/${b.slug}`}
              blog={b}
              nextBlog={entries[idx - 1]}
              prevBlog={entries[idx + 1]}
            />
          ))}
        </Router>
        <footer className="colored-links">
          <a href={config.twitterLink}>Twitter</a>
          {" • "}
          <a href={config.githubLink}>GitHub</a>
        </footer>
      </Wrapper>
    </GlobalContextProvider>
  );
}

const Wrapper = styled.div`
  .colored-links {
    a {
      color: #d47ee9;
      box-shadow: 0 1px 0 0 #d47ee9;
    }
  }
  footer {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;
