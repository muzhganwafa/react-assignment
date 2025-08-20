import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Hi, I'm Muzhgan</h2>
      <p className={styles.subtitle}>
        I am passionate about web development and security.
      </p>
    </header>
  );
};

export default Header;
