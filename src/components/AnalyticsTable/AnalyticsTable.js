import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

import useSortableData from '../../hooks/useSortableData';
import AnalyticsTableRow from '../AnalyticsTableRow/AnalyticsTableRow';

import styles from './AnalyticsTable.module.css';

const AnalyticsTable = ({ countriesData }) => {
  const { items, requestSort, sortConfig } = useSortableData(countriesData);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const tableBodyData = items.map((item) => {
    return <AnalyticsTableRow item={item} key={item.CountryCode} />;
  });

  return (
    <table className={styles.analyticsTable}>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('Country')}
              className={`${getClassNamesFor('Country')} ${styles.button}`}
            >
              Location
              <span className={styles.icon}>
                <FaCaretUp className={styles.icon1} />
                <FaCaretDown className={styles.icon2} />
              </span>
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalConfirmed')}
              className={`${getClassNamesFor('TotalConfirmed')} ${
                styles.button
              }`}
            >
              Confirmed
              <span className={styles.icon}>
                <FaCaretUp className={styles.icon1} />
                <FaCaretDown className={styles.icon2} />
              </span>
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalDeaths')}
              className={`${getClassNamesFor('TotalDeaths')} ${styles.button} ${
                styles.totalDeaths
              }`}
            >
              Deaths
              <span className={styles.icon}>
                <FaCaretUp className={styles.icon1} />
                <FaCaretDown className={styles.icon2} />
              </span>
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('TotalRecovered')}
              className={`${getClassNamesFor('TotalRecovered')} ${
                styles.button
              } ${styles.totalRecovered}`}
            >
              Recovered
              <span className={styles.icon}>
                <FaCaretUp className={styles.icon1} />
                <FaCaretDown className={styles.icon2} />
              </span>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{tableBodyData}</tbody>
    </table>
  );
};

export default AnalyticsTable;
