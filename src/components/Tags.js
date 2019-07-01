import React from "react";
import { useGlobalContext } from "../providers/GlobalContextProvider";
import styled from "styled-components";

export default function Tags({ tags }) {
  const [state, actions] = useGlobalContext();

  return (
    <Wrapper>
      <div className="tags">
        {tags && tags.length > 0 && (
          <div className="tags flex-row-wrap">
            {tags.map((tag, idx) => {
              return (
                <Tag
                  key={idx}
                  selected={state.filterByTags.includes(tag)}
                  onClick={() => actions.toggleFilter(tag)}
                >
                  {tag}
                </Tag>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tags {
    margin-top: 5px;
  }
`;

const Tag = styled.div`
  background: #573a5f;
  ${(props) => {
    if (props.selected) {
      return `
        background: #785482;
        border: 1px solid #573a5f;
      `;
    }
  }}
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  padding: 5px 8px;
  margin-right: 5px;
  cursor: pointer;
`;
