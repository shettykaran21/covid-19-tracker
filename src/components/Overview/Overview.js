import React from 'react';
import CountUp from 'react-countup';

import InfoCard from '../InfoCard/InfoCard';

import styles from './Overview.module.css';

const Overview = ({
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  date,
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
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

    const todayOrYesterday =
      dateObj.getDate() < new Date().getDate() ? 'Yesterday' : 'Today';

    console.log(new Date().getDate(), dateObj.getDate());

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
        <InfoCard data={totalConfirmed} title="Total Confirmed" />
        <InfoCard
          data={totalDeaths}
          title="Total Deaths"
          textColor="var(--color-red)"
        />
        <InfoCard
          data={totalRecovered}
          title="Total Recovered"
          textColor="var(--color-green)"
        />
        <InfoCard data={newConfirmed} title="New Confirmed" />
        <InfoCard
          data={newDeaths}
          title="New Deaths"
          textColor="var(--color-red)"
        />
        <InfoCard
          data={newRecovered}
          title="New Recovered"
          textColor="var(--color-green)"
        />
      </div>
    </div>
  );
};

export default Overview;
