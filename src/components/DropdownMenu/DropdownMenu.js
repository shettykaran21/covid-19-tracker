import React from 'react';
import { FaChartArea, FaUserMd } from 'react-icons/fa';

import DropdownItem from '../DropdownItem/DropdownItem';

import styles from './DropdownMenu.module.css';

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <DropdownItem icon={<FaUserMd />}>About COVID-19</DropdownItem>
      <DropdownItem icon={<FaChartArea />}>Flatten the curve</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
