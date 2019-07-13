import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NewsList } from "../../components";
import { fetchTopHeadlines } from "../../utils/api";
import { capitalize } from "../../utils/strings";
import categories from "../../data/categories.json";

const Wrapper = styled.div`
  padding: 0 18px;
`;

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: none;
  overflow: scroll;
  padding: 0 18px 20px;
  margin: 0 -18px;
`;

const Category = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 16px;
  }

  &:last-of-type {
    padding-right: 18px;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 16px;
    margin-bottom: 12px;
    background-color: #f2f2f2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  &:hover img {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .title {
    text-decoration: none;
    margin: 0;
  }
`;

export default function News() {
  return (
    <Wrapper>
      <div>
        <h2>Categories</h2>
        <CategoriesList>
          {categories.map(({ title, image }) => (
            <Category key={title} to={`/category/${title}`}>
              <img src={image} alt="" />
              <h4 className="title">{capitalize(title)}</h4>
            </Category>
          ))}
        </CategoriesList>
      </div>
      <div>
        <h2>Latest news</h2>
        <NewsList loadNews={fetchTopHeadlines} />
      </div>
    </Wrapper>
  );
}
