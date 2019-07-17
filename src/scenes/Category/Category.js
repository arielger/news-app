import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { Header, NewsList } from "../../components";
import { fetchNewsFromCategory } from "../../utils/api";
import categories from "../../data/categories";

const Wrapper = styled.div`
  padding: 0 18px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

export default function Category({ match }) {
  const selectedCategory = categories.find(
    category => category.title === match.params.category
  );

  return (
    <>
      <Header category={selectedCategory} />
      <Wrapper className="animated fadeInUp">
        {selectedCategory ? (
          <>
            <NewsList
              loadNews={() =>
                fetchNewsFromCategory({
                  category: match.params.category
                })
              }
            />
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Wrapper>
    </>
  );
}
