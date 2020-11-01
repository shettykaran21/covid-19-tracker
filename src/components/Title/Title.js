import React from 'react';

import styles from './Title.module.css';

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.heading}>{title}</h1>
    </div>
  );
};

export default Title;
