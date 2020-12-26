import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import logo from '../../img/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>

        <ul className={styles.list}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.listLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/map" className={styles.listLink}>
              Map
            </Link>
          </li>
          <li>
            <Link to="/analytics" className={styles.listLink}>
              Analytics
            </Link>
          </li>
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to={useLocation().pathname} className={styles.listLink}>
              More
            </Link>
            {dropdown && <DropdownMenu />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
