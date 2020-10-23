import React from 'react';
import CountUp from 'react-countup';

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
      <div style={{ marginBottom: '3rem' }}>
        <h2>Overview</h2>
      </div>
      <div className={styles.data}>
        <div>
          <div className={styles.number}>
            <CountUp
              start={40000000}
              end={totalConfirmed}
              formattingFn={formatNumber}
            />
          </div>
          Total Confirmed
        </div>
        <div>
          <div className={styles.number} style={{ color: '#c22808ff' }}>
            <CountUp
              start={1000000}
              end={totalDeaths}
              formattingFn={formatNumber}
            />
          </div>
          Total Deaths
        </div>
        <div>
          <div className={styles.number} style={{ color: '#6cf22e' }}>
            <CountUp
              start={20000000}
              end={totalRecovered}
              formattingFn={formatNumber}
            />
          </div>
          Total Recovered
        </div>
      </div>
    </div>
  );
};

export default Overview;
