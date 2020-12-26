import React from 'react';

import styles from './NewsArticle.module.css';

const NewsArticle = ({ article }) => {
  return (
    <div className={styles.newsArticle}>
      <img
        src={article.urlToImage}
        alt={article.author}
        className={styles.newsImage}
      />
      <div>
        <a href={article.url} target="_blank" className={styles.newsLink}>
          <h2 className={styles.newsTitle}>{article.title}</h2>
          <p>{article.description}</p>
        </a>
      </div>
    </div>
  );
};

export default NewsArticle;
