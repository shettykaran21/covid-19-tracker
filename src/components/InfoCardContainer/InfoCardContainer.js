import React from 'react';

import styles from './InfoCardContainer.module.css';

const InfoCardContainer = (props) => {
  return <div className={styles.data}>{props.children}</div>;
};

export default InfoCardContainer;
