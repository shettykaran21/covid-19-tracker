import React from 'react';
import CountUp from 'react-countup';

import { formatNumber } from '../utils';

import styles from './InfoCard.module.css';

const InfoCard = ({ data, title, textColor, children, countUp }) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.number} style={{ color: textColor }}>
        {!countUp ? (
          <CountUp start={40000000} end={data} formattingFn={formatNumber} />
        ) : (
          <span>{data} </span>
        )}
        {children}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default InfoCard;
