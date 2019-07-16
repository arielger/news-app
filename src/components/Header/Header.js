import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { capitalize } from "../../utils/strings";
import { ReactComponent as AngleRightIcon } from "./angle-right-icon.svg";

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

  h1 {
    display: flex;
    align-items: center;
    margin: 0;
  }

  svg {
    width: 10px;
    margin: 6px 14px 0;
    opacity: 0.6;
  }
`;

export default function Header({ category }) {
  return (
    <Wrapper category={category}>
      <h1>
        <Link to="/">News</Link>
        {category && (
          <>
            <AngleRightIcon />
            <Link to={`/category/${category.title}`}>
              {capitalize(category.title)}
            </Link>
          </>
        )}
      </h1>
    </Wrapper>
  );
}
