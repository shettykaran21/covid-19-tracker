import React from 'react';

import styles from './Title.module.css';

const Title = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </div>
  );
};

export default Title;
