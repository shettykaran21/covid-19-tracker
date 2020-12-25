import React from 'react';

import { formatNumber } from '../InfoCard/InfoCard';
import useSortableData from '../../hooks/useSortableData';

import styles from './AnalyticsTable.module.css';

const AnalyticsTable = ({ countriesData }) => {
  const { items, requestSort, sortConfig } = useSortableData(countriesData);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const countriesDataRow = items.map((item) => {
    const {
      Country,
      CountryCode,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = item;
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
          <th>
            <button
              type="button"
              onClick={() => requestSort('Country')}
              className={getClassNamesFor('Country')}
            >
              Location
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalConfirmed')}
              className={getClassNamesFor('TotalConfirmed')}
            >
              Confirmed
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalDeaths')}
              className={getClassNamesFor('TotalDeahs')}
            >
              Deaths
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalRecovered')}
              className={getClassNamesFor('TotalRecovered')}
            >
              Recovered
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{countriesDataRow}</tbody>
    </table>
  );
};

export default AnalyticsTable;
