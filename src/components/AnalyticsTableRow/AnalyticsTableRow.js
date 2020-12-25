import React from 'react';

import { formatNumber } from '../InfoCard/InfoCard';

const AnalyticsTableRow = ({ item }) => {
  const {
    Country,
    CountryCode,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = item;

  return (
    <tr>
      <td>
        <img
          src={`https://www.countryflags.io/${CountryCode}/flat/32.png`}
          alt={CountryCode}
        />
        {Country}
      </td>
      <td>{formatNumber(TotalConfirmed)}</td>
      <td>{formatNumber(TotalDeaths)}</td>
      <td>{formatNumber(TotalRecovered)}</td>
    </tr>
  );
};

export default AnalyticsTableRow;
