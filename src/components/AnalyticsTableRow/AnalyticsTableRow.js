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
    NewRecovered,
    NewConfirmed,
    NewDeaths,
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
      <td className={styles.new}>+ {formatNumber(NewConfirmed)}</td>
      <td>{formatNumber(TotalDeaths)}</td>
      <td className={styles.new}>+ {formatNumber(NewDeaths)}</td>
      <td>{formatNumber(TotalRecovered)}</td>
      <td className={styles.new}>+ {formatNumber(NewRecovered)}</td>
    </tr>
  );
};

export default AnalyticsTableRow;
