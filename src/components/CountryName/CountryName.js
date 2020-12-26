import React from 'react';

import styles from './CountryName.module.css';

const CountryName = ({ countryName, countryCode, imgSrc }) => {
  return (
    <div className={styles.countryName}>
      <div>
        <img src={imgSrc} alt={countryCode} />
      </div>
      <h1>{countryName}</h1>
    </div>
  );
};

export default CountryName;
