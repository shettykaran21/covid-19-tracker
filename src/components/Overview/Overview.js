import React from 'react';

import InfoCard from '../InfoCard/InfoCard';
import InfoCardContainer from '../InfoCardContainer/InfoCardContainer';
import Title from '../Title/Title';

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
  const formatDate = (date) => {
    const dateObj = new Date(date);

    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const todayOrYesterday =
      dateObj.getDate() < new Date().getDate() ? 'Yesterday' : 'Today';

    // console.log(new Date().getDate(), dateObj.getDate());

    const strTime = hours + ':' + minutes + ' ' + ampm;
    return `${todayOrYesterday} ${strTime}`;
  };

  return (
    <div className={styles.overview}>
      <div style={{ marginBottom: '3rem' }}>
        <Title title="Overview" />
        <p
          style={{
            fontWeight: '300',
            color: 'var(--color-grey-4)',
            fontSize: '1.6rem',
          }}
        >
          Last Updated: <span>{formatDate(date)}</span>
        </p>
      </div>
      <InfoCardContainer>
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
      </InfoCardContainer>
    </div>
  );
};

export default Overview;
