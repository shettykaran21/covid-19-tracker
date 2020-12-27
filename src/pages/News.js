import axios from 'axios';
import React, { useState, useEffect } from 'react';

import news from '../api/news';
import NewsArticle from '../components/NewsArticle/NewsArticle';
import NewsRelated from '../components/NewsRelated/NewsRelated';
import Title from '../components/Title/Title';

const News = () => {
  const [headlinesData, setHeadlinesData] = useState({});
  const [everythingData, setEverythingData] = useState({});

  const getData = async () => {
    const responseHeadlines = await news.get('/top-headlines', {
      params: {
        q: 'covid',
        country: 'in',
      },
    });

    const responseEverything = await news.get('/everything', {
      params: {
        q: 'covid',
        from: '2020-12-26',
        sortBy: 'popularity',
      },
    });

    const responseDataHeadlines = responseHeadlines.data;
    const responseDataEverything = responseEverything.data;

    setHeadlinesData(responseDataHeadlines);
    setEverythingData(responseDataEverything);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(everythingData);

  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: 'var(--nav-height)',
        maxWidth: '100rem',
        padding: '3rem 0',
      }}
    >
      <div
        style={{
          marginBottom: '10rem',
        }}
      >
        <Title title="Latest News" />
        <div>
          {headlinesData.articles ? (
            headlinesData.articles.map((article, index) => {
              return <NewsArticle key={index} article={article} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div>
        <h2>Related</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '1rem',
            margin: '3rem 0',
          }}
        >
          {everythingData.articles &&
            everythingData.articles.map((article, index) => {
              return <NewsRelated key={index} article={article} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default News;
