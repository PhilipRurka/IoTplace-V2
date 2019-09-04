import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.navWrapper}>
        <h1>Header</h1>
      </div>
    )
  };
};

export default Header;