import React from 'react';
import { FaUserNurse } from 'react-icons/fa';

import TitleSecondary from '../TitleSecondary/TitleSecondary';

import styles from './Background.module.css';

const Background = () => {
  return (
    <div className={styles.background}>
      <TitleSecondary title="Background">
        <FaUserNurse fill="var(--color-white)" fontSize="5rem" />
      </TitleSecondary>
      <p className={styles.content}>
        The COVID-19 is an undiscovered strain of the coronavirus family.
        Currently, the virus has a few epicenters in China, South Korea, and
        Italy, but cases are being reported in different countries. Authorities
        are taking measures to prevent the spread of the COVID-19 and develop a
        vaccine; Until then, the best form of protection is to avoid any
        infected areas or people.
      </p>
    </div>
  );
};

export default Background;
