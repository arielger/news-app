import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { FetchMock } from "@react-mock/fetch";
import { render, waitForElement, getByText } from "@testing-library/react";
import News from "./News";

test("render list of categories", () => {
  const { getByText } = render(
    <MemoryRouter>
      <News />
    </MemoryRouter>
  );

  getByText("Business");
  getByText("Entertainment");
  getByText("Health");
});

test("render list of news", async () => {
  const fakeNewsResponse = {
    articles: [
      {
        title: "Title 1",
        description: "Description 1",
        url:
          "https://www.mlbtraderumors.com/2019/07/jay-bruce-oblique-strain-injury-phillies.html",
        urlToImage:
          "https://cdn.mlbtraderumors.com/files/2019/07/jay-bruce-phillies-1024x731.jpg"
      },
      {
        title: "Title 2",
        description: "Description 2",
        url:
          "https://www.nbcsports.com/bayarea/warriors/steph-curry-posts-own-agechallenge-photo-warriors-draft-day",
        urlToImage:
          "https://www.nbcsports.com/bayarea/sites/csnbayarea/files/2019/07/16/curryap.jpg"
      }
    ],
    status: "ok",
    totalResults: 2
  };

  const { getAllByTestId } = render(
    <MemoryRouter>
      <FetchMock
        options={{
          matcher: /\/top-headlines/,
          method: "GET",
          response: fakeNewsResponse
        }}
      >
        <News />
      </FetchMock>
    </MemoryRouter>
  );

  const newsItems = await waitForElement(() => getAllByTestId("news-item"));

  expect(newsItems).toHaveLength(2);
  getByText(newsItems[0], "Title 1");
  getByText(newsItems[0], "Description 1");
  getByText(newsItems[1], "Title 2");
  getByText(newsItems[1], "Description 2");
});
