import React from 'react';
import { Link } from 'react-router-dom';

import { formatNumber } from '../utilityFunctions';

import styles from './AnalyticsTableRow.module.css';

const AnalyticsTableRow = ({ item }) => {
  const {
    Country,
    CountryCode,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    Slug,
  } = item;

  const imgSrc = `https://www.countryflags.io/${CountryCode}/flat/32.png`;

  return (
    <tr>
      <td>
        <img src={imgSrc} alt={CountryCode} />
        <Link
          className={styles.countryLink}
          to={{
            pathname: `/analytics/${Slug}`,
            state: {
              Country,
              CountryCode,
              TotalConfirmed,
              TotalDeaths,
              TotalRecovered,
              imgSrc,
            },
          }}
        >
          {Country}
        </Link>
      </td>
      <td>{formatNumber(TotalConfirmed)}</td>
      <td>{formatNumber(TotalDeaths)}</td>
      <td>{formatNumber(TotalRecovered)}</td>
    </tr>
  );
};

export default AnalyticsTableRow;
