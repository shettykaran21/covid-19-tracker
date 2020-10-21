import React from 'react';

const Overview = ({ totalConfirmed, totalDeaths, totalRecovered }) => {
  const formatNumber = (num) => {
    num = num.toString();
    let afterPoint = '';
    if (num.indexOf('.') > 0) {
      afterPoint = num.substring(num.indexOf('.'), num.length);
    }
    num = Math.floor(num);
    num = num.toString();
    let lastThree = num.substring(num.length - 3);
    let otherNumbers = num.substring(0, num.length - 3);
    if (otherNumbers != '') {
      lastThree = ',' + lastThree;
    }
    let res =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
      lastThree +
      afterPoint;

    return res;
  };

  return (
    <div className="overview">
      <div>{formatNumber(totalConfirmed)}</div>
      <div>{formatNumber(totalDeaths)}</div>
      <div>{formatNumber(totalRecovered)}</div>
    </div>
  );
};

export default Overview;
