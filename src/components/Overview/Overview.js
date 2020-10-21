import React from 'react';

const Overview = ({ totalConfirmed, totalDeaths, totalRecovered }) => {
  return (
    <div className="overview">
      <div>{totalConfirmed}</div>
      <div>{totalDeaths}</div>
      <div>{totalRecovered}</div>
    </div>
  );
};

export default Overview;
