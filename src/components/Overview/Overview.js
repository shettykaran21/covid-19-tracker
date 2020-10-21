import React from 'react';

import styles from './Overview.module.css';

const Overview = ({ totalConfirmed, totalDeaths, totalRecovered }) => {
  const formatNumber = (num) => {
    num = num.toString();
    let afterPoint = '';
    if (num.indexOf('.') > 0) {
      afterPoint = num.substring(num.indexOf('.'), num.length);
    }
    num = Math.floor(num);
    num = num.toString();
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != '') {
      lastThree = ',' + lastThree;
    }
    let res =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
      lastThree +
      afterPoint;

    return res;
  };

  return (
    <div className={styles.overview}>
      <div>
        <div className={styles.number}>{formatNumber(totalConfirmed)}</div>
        Total Confirmed
      </div>
      <div>
        <div className={styles.number} style={{ color: '#c22808ff' }}>
          {formatNumber(totalDeaths)}
        </div>
        Total Deaths
      </div>
      <div>
        <div className={styles.number} style={{ color: '#6cf22e' }}>
          {formatNumber(totalRecovered)}
        </div>
        Total Recovered
      </div>
    </div>
  );
};

export default Overview;
