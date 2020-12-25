import React from 'react';

import { formatNumber } from '../InfoCard/InfoCard';

import styles from './AnalyticsTable.module.css';

const AnalyticsTable = ({ countriesData }) => {
  const countriesDataRow = countriesData.map((countryData) => {
    return (
      <tr>
        <td>
          <img
            src={`https://www.countryflags.io/${countryData.CountryCode}/flat/32.png`}
          />
          {countryData.Country}
        </td>
        <td>{formatNumber(countryData.TotalConfirmed)}</td>
        <td>{formatNumber(countryData.TotalDeaths)}</td>
        <td>{formatNumber(countryData.TotalRecovered)}</td>
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
