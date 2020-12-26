import axios from 'axios';
import React, { useState, useEffect } from 'react';

import news from '../api/news';
import NewsArticle from '../components/NewsArticle/NewsArticle';
import Title from '../components/Title/Title';

const News = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get(
      'http://newsapi.org/v2/top-headlines?' +
        'q=covid&' +
        'country=in&' +
        'apiKey=583a8a26978845cdb9a7b838b2ea3854'
    );

    const responseData = response.data;
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: 'var(--nav-height)',
        maxWidth: '100rem',
        padding: '3rem 0',
      }}
    >
      <Title title="Latest News" />
      {data.articles ? (
        data.articles.map((article, index) => {
          return <NewsArticle key={index} article={article} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default News;
