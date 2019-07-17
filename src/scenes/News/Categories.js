import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import categories from "../../data/categories";
import { capitalize } from "../../utils/strings";

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: none;
  overflow: scroll;
  padding: 0 18px 20px;
  margin: 0 -18px;

  @media (min-width: 768px) {
    padding: 0 32px 20px;
    margin: 0 -32px;
  }
`;

const Category = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;

  &.selected {
    .icon-wrapper {
      width: 200px;
    }
  }

  :not(:last-of-type) {
    margin-right: 16px;
  }

  &:last-of-type {
    padding-right: 18px;
  }

  .icon-wrapper {
    width: 120px;
    height: 120px;
    border-radius: 16px;
    margin-bottom: 12px;
    background-color: #f2f2f2;
    transition: 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
    }
  }

  .title {
    text-decoration: none;
    margin: 0;
  }
`;

export default function Categories() {
  return (
    <CategoriesList>
      {categories.map(({ title, icon: Icon, backgroundColor }) => {
        return (
          <Category className="category" key={title} to={`/category/${title}`}>
            <div className="icon-wrapper" style={{ backgroundColor }}>
              {Icon && <Icon color="#fff" />}
            </div>
            <h4 className="title">{capitalize(title)}</h4>
          </Category>
        );
      })}
    </CategoriesList>
  );
}
