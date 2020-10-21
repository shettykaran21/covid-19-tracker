import React from 'react';
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    //  fa-heart footer__icon footer__icon--heart
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
          className={styles.link}
        ></a>
        <FaGithub className={`${styles.icon}`} />
        <a
          href="https://www.linkedin.com/in/shettykaran21/"
          target="_blank"
          className={styles.link}
        ></a>
        <FaLinkedin className={`${styles.icon}`} />
        <a
          href="https://twitter.com/shettykaran21"
          target="_blank"
          className={styles.link}
        ></a>
        <FaTwitter className={`${styles.icon}`} />
      </div>
    </footer>
  );
};

export default Footer;
