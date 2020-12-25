import React from 'react';

import { formatNumber } from '../InfoCard/InfoCard';

import styles from './AnalyticsTable.module.css';

const AnalyticsTable = ({ countriesData }) => {
  const countriesDataRow = countriesData.map((countryData) => {
    const {
      Country,
      CountryCode,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = countryData;
    return (
      <tr key={CountryCode}>
        <td>
          <img src={`https://www.countryflags.io/${CountryCode}/flat/32.png`} />
          {Country}
        </td>
        <td>{formatNumber(TotalConfirmed)}</td>
        <td>{formatNumber(TotalDeaths)}</td>
        <td>{formatNumber(TotalRecovered)}</td>
      </tr>
    );
  });

  return (
    <table className={styles.analyticsTable}>
      <thead>
        <tr>
          <th>Location</th>
          <th>Confirmed</th>
          <th>Dead</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>{countriesDataRow}</tbody>
    </table>
  );
};

export default AnalyticsTable;
