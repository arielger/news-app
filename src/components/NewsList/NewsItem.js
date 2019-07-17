import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ReactComponent as BookmarkIconRegular } from "./bookmark-icon.svg";
import { ReactComponent as BookmarkIconSolid } from "./bookmark-icon-solid.svg";

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  position: relative;

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

const pulseAnimation = keyframes`
  from {
    transform: scale(1)
  }

  50% {
    transform: scale(1.05);
  }

  to {
    transform: scale(1);
  }
`;

const SaveToBookmarks = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  height: 30px;
  max-width: 30px;
  color: #fff;
  padding: 0;
  font-weight: 500;
  border-radius: 50%;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s;

  :focus {
    outline: none;
  }

  &:hover {
    max-width: 160px;
    border-radius: 9999px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgb(251, 94, 125);
      color: #fff;
      animation: ${pulseAnimation} 0.4s forwards;
    `}

  span {
    padding: 0 4px 0 14px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
  }

  svg {
    flex-shrink: 0;
    width: 12px;
    padding: 0 9px;
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
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <ArticleWrapper
      key={url}
      {...!isPlaceholder && { "data-testid": "news-item" }}
    >
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
          <SaveToBookmarks
            onClick={() => {
              setIsBookmark(!isBookmark);
            }}
            active={isBookmark}
          >
            <span>
              {isBookmark ? `Saved to bookmarks` : `Save to bookmark`}
            </span>
            {isBookmark ? <BookmarkIconSolid /> : <BookmarkIconRegular />}
          </SaveToBookmarks>
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
