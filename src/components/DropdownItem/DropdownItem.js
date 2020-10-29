import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DropdownItem.module.css';

const DropdownItem = ({ children, icon }) => {
  return (
    <Link to="" className={styles.dropdownItem}>
      <span className={styles.iconButton}>{icon}</span>
      {children}
    </Link>
  );
};

export default DropdownItem;
