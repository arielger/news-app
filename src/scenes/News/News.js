import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import { Header, NewsList } from "../../components";
import { fetchTopHeadlines } from "../../utils/api";

const Wrapper = styled.div`
  padding: 0 18px;
`;

export default function News({ animationState }) {
  return (
    <>
      <Header />
      <Wrapper
        className={`animated ${
          animationState === "exiting" ? "fadeOutDown" : ""
        }`}
      >
        <div>
          <h2>Categories</h2>
          <Categories />
        </div>
        <div>
          <h2>Latest news</h2>
          <NewsList loadNews={fetchTopHeadlines} />
        </div>
      </Wrapper>
    </>
  );
}
