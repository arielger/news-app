const NEWS_API_URL = "https://newsapi.org/v2";

const fetchTopHeadlines = ({ country = "us" } = {}) => {
  const url = `${NEWS_API_URL}/top-headlines?country=${country}&apiKey=${
    process.env.REACT_APP_NEWS_API_KEY
  }`;

  return fetch(url).then(res => res.json());
};

const fetchNewsFromCategory = ({ country = "us", category } = {}) => {
  const url = `${NEWS_API_URL}/top-headlines?country=${country}&category=${category}&apiKey=${
    process.env.REACT_APP_NEWS_API_KEY
  }`;

  return fetch(url).then(res => res.json());
};

export { fetchTopHeadlines, fetchNewsFromCategory };
