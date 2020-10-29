import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.css';

const NavItem = ({ menu, path, icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <Link
        to={path}
        className={`${styles.listLink}`}
        onClick={() => setOpen(!open)}
      >
        <div>{menu}</div>
        <div>{icon}</div>
      </Link>
      {open && children}
    </li>
  );
};

export default NavItem;
