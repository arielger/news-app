import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import { Header, NewsList } from "../../components";
import { fetchTopHeadlines } from "../../utils/api";

const Wrapper = styled.div`
  padding: 0 18px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

export default function News() {
  return (
    <>
      <Header />
      <Wrapper>
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
