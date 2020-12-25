import React from 'react';

import styles from './AnalyticsTable.module.css';

const AnalyticsTable = () => {
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
      <tbody>
        <tr>
          <td>
            <img src="https://www.countryflags.io/in/flat/32.png" />
            India
          </td>
          <td>6000</td>
          <td>6000</td>
          <td>6000</td>
        </tr>
        <tr>
          <td>
            <img src="https://www.countryflags.io/US/flat/32.png" />
            United States of America
          </td>
          <td>6000</td>
          <td>6000</td>
          <td>6000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
