import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import logo from '../../logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.container}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <ul className={styles.list}>
          <NavItem menu="Home" path="/" />
          <NavItem menu="Map" path="/map" />
          <NavItem menu="Analytics" path="/analytics" />
          <NavItem
            menu="More"
            path={useLocation().pathname}
            icon={<FaCaretDown />}
          >
            <DropdownMenu />
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
