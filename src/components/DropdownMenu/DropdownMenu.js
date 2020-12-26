import React, { useState } from 'react';
import { FaChartArea, FaUserMd } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './DropdownMenu.module.css';

const dropdownItems = [
  {
    title: 'About covid-19',
    path: '/about-covid-19',
    icon: <FaUserMd />,
  },
  {
    title: 'Flatten the curve',
    path: '/flatten-the-curve',
    icon: <FaChartArea />,
  },
];

const DropdownMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      className={`${styles.dropdownMenu} ${click ? styles.clicked : ''}`}
      onClick={handleClick}
    >
      {dropdownItems.map((item, index) => {
        return (
          <li key={index} className={styles.dropdownItem}>
            <span className={styles.iconButton}>{item.icon}</span>
            <Link
              className={styles.dropdownLink}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
