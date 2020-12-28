import React from 'react';

import styles from './TitleSecondary.module.css';

const TitleSecondary = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <div>{children}</div>
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
};

export default TitleSecondary;
