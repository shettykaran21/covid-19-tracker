import React from 'react';

import styles from './TitleSecondary.module.css';

const TitleSecondary = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </div>
  );
};

export default TitleSecondary;
