import React from 'react';
import CountUp from 'react-countup';

import styles from './Overview.module.css';

const Overview = ({ totalConfirmed, totalDeaths, totalRecovered, date }) => {
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

  const formatDate = (date) => {
    const dateObj = new Date(date);

    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // console.log(new Date().getHours(), hours);

    const todayOrYesterday =
      new Date().getHours() > hours ? 'Yesterday' : 'Today';

    const strTime = hours + ':' + minutes + ' ' + ampm;

    return `${todayOrYesterday} ${strTime}`;
  };

  return (
    <div className={styles.overview}>
      <div style={{ marginBottom: '3rem' }}>
        <h2>Overview</h2>
        <p style={{ fontWeight: '300', color: '#aaa', fontSize: '1.6rem' }}>
          Last Updated:{' '}
          <span>
            {/* {new Date(date).toString()} */}
            {formatDate(date)}
          </span>
        </p>
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
          <span>Total Confirmed</span>
        </div>
        <div>
          <div className={styles.number} style={{ color: '#c22808ff' }}>
            <CountUp
              start={1000000}
              end={totalDeaths}
              formattingFn={formatNumber}
            />
          </div>
          <span>Total Deaths</span>
        </div>
        <div>
          <div className={styles.number} style={{ color: '#6cf22e' }}>
            <CountUp
              start={20000000}
              end={totalRecovered}
              formattingFn={formatNumber}
            />
          </div>
          <span>Total Recovered</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
