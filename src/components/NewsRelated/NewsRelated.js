import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';

import styles from './NewsRelated.module.css';

const NewsRelated = ({ article }) => {
  return (
    <div className={styles.newsRelated}>
      <img
        src={article.urlToImage}
        alt={article.author}
        className={styles.newsImage}
      />
      <div>
        <h3 className={styles.newsTitle}>{article.title}</h3>
        <a href={article.url} target="_blank" className={styles.newsLink}>
          Read more...
        </a>
      </div>
    </div>
  );
};

export default NewsRelated;
