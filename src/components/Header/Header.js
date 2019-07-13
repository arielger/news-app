import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 24px 18px 32px 18px;

  a {
    text-decoration: none;
    color: currentColor;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Title>News</Title>
      </Link>
    </Wrapper>
  );
}
