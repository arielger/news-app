import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NewsItem from "./NewsItem";
import exclamationIcon from "./exclamation-icon.svg";

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  img {
    width: 40px;
    height: 40px;
    opacity: 0.3;
    margin-bottom: 12px;
  }
`;

export default function NewsList({ loadNews }) {
  const [news, setNews] = useState();
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    loadNews()
      .then(response => setNews(response.articles))
      .catch(error => {
        console.error(error);
        setErrorLoading(true);
      });
  }, [loadNews]);

  return errorLoading ? (
    <Error>
      <img src={exclamationIcon} alt="" />
      <span>There was an error loading the news</span>
    </Error>
  ) : (
    <NewsGrid>
      {news
        ? news.map(newsItem => <NewsItem key={newsItem.url} {...newsItem} />)
        : [...Array(9)].map((_, i) => (
            <NewsItem key={i} isPlaceholder={true} />
          ))}
    </NewsGrid>
  );
}
