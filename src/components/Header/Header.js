import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { capitalize } from "../../utils/strings";

const Wrapper = styled.header`
  padding: 32px 18px;
  margin-bottom: 32px;

  a {
    text-decoration: none;
    color: currentColor;
  }

  ${({ category }) =>
    category &&
    css`
      color: white;
      background-color: ${category.backgroundColor};
    `}
`;

const Title = styled.h1`
  margin: 0;
  display: inline-block;
  margin-right: 8px;
`;

const CategoryTitle = styled.h2`
  margin: 0;
  display: inline-block;
`;

export default function Header({ category }) {
  return (
    <Wrapper category={category}>
      <Link to="/">
        <Title>News</Title>
      </Link>
      {category && (
        <Link to={`/category/${category.title}`}>
          <CategoryTitle>- {capitalize(category.title)}</CategoryTitle>
        </Link>
      )}
    </Wrapper>
  );
}
