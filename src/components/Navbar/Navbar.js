import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../covid.png';

import styles from './Navbar.module.css';

const Navbar = () => {
  // console.log(useLocation());
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/" className={`${styles.listLink}`}>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/map" className={styles.listLink}>
              Map
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/contact" className={styles.listLink}>
              Contact
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/about" className={styles.listLink}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
