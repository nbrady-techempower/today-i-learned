import React from "react";
import styled from "styled-components";
import config from "../config";

export default function AuthorCallout() {
  return (
    <Wrapper className="flex-row colored-links">
      <img src={config.authorImg} alt={config.author} />
      <div className="flex-col flex-jcc">
        <div className="mb-5">
          A blog by <a href={config.twitterLink}>{config.author}</a>
        </div>
        <div>{config.authorQuote}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 5rem;
  img {
    margin-right: 0.875rem;
    margin-bottom: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;
