import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';

import { formatDate } from '../utilityFunctions';

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
        <h2 className={styles.newsTitle}>{article.title}</h2>
        <p className={styles.newsDescription}>{article.description}</p>
        <div className={styles.newsExtras}>
          <a href={article.url} target="_blank" className={styles.newsLink}>
            <FaRegNewspaper />
            View Full Coverage
          </a>
          <div className={styles.newsExtrasRight}>
            <span>{article.author}</span>
            <br />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
