import React from 'react';
import CountUp from 'react-countup';

import styles from './InfoCard.module.css';

export const formatNumber = (num) => {
  num = num.toString();
  let afterPoint = '';
  if (num.indexOf('.') > 0) {
    afterPoint = num.substring(num.indexOf('.'), num.length);
  }
  num = Math.floor(num);
  num = num.toString();
  let lastThree = num.substring(num.length - 3);
  let otherNumbers = num.substring(0, num.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  let res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;

  return res;
};

const InfoCard = ({ data, title, textColor }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.number} style={{ color: textColor }}>
        <CountUp start={40000000} end={data} formattingFn={formatNumber} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default InfoCard;
