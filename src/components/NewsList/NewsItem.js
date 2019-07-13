import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  .article-image {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 12px;
    background-color: #f2f2f2;
  }

  .title-link {
    text-decoration: none;
    color: currentColor;
  }

  .title {
    margin: 0 0 8px 0;
  }

  .description {
    margin: 0;
  }
`;

const TitlePlaceholder = styled.div`
  margin-top: 4px;

  & span {
    display: block;
    height: 16px;
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 2px;

    & + span {
      margin-top: 12px;
    }

    &:last-child {
      width: 75%;
    }
  }
`;

export default function NewsItem({
  title,
  description,
  url,
  urlToImage,
  isPlaceholder = false
}) {
  return (
    <ArticleWrapper key={url}>
      {isPlaceholder ? (
        <>
          <div className="article-image" />
          <TitlePlaceholder>
            <span />
            <span />
          </TitlePlaceholder>
        </>
      ) : (
        <>
          <a href={url}>
            {urlToImage ? (
              <LazyLoadImage
                alt=""
                className="article-image"
                src={urlToImage}
                placeholder={<span className="article-imge" />}
              />
            ) : (
              <div className="article-image" />
            )}
          </a>
          <a className="title-link" href={url}>
            <h3 className="title">{title}</h3>
          </a>
          <p className="description">{description}</p>
        </>
      )}
    </ArticleWrapper>
  );
}
