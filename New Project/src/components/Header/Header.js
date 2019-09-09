import React from 'react';
import './Header.scss'
import logo from '../../assets/images/iotplace-icon.svg';
import { jsx, css } from '@emotion/core';

class Header extends React.Component {
  
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-container">
          <div className="logo-wrapper">
            <div className="logo" css={css`background-color: red;`} />
          </div>
          <div className="nav-wrapper">
            <div className="nav-container">
              <ul>
                <li>
                  <a href="">Discover</a>
                  <a href="">Watchlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;