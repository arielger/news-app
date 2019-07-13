import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { NewsList } from "../../components";
import { fetchNewsFromCategory } from "../../utils/api";
import { capitalize } from "../../utils/strings";
import categories from "../../data/categories.json";

const Wrapper = styled.div`
  padding: 0 18px;
`;

export default function Category({ match }) {
  const selectedCategory = categories.find(
    category => category.title === match.params.category
  );

  return (
    <Wrapper>
      {selectedCategory ? (
        <>
          <h1>{capitalize(match.params.category)}</h1>
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
  );
}
