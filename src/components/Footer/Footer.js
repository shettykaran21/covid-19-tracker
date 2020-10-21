import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Made with
        <FaHeart className={styles.iconHeart} /> by
        <span className={styles.myLogo}>KARAN SHETTY</span>
      </div>
      <div className={styles.social}>
        <a
          href="https://www.github.com/shettykaran21"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaGithub className={`${styles.icon}`} />
        </a>

        <a
          href="https://www.linkedin.com/in/shettykaran21/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaLinkedin className={`${styles.icon}`} />
        </a>
        <a
          href="https://twitter.com/shettykaran21"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaTwitter className={`${styles.icon}`} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
