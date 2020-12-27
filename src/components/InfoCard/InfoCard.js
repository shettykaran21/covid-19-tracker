import React from 'react';
import CountUp from 'react-countup';

import { formatNumber } from '../utils';

import styles from './InfoCard.module.css';

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
