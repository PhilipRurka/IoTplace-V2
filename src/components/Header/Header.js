import React from 'react';
import styled from '@emotion/styled';
import { ColorThemeContext, Themes } from '../../context/theme';

class Header extends React.Component {

  NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 23px 0;
  `;

  LogoWrapper = styled.a`
    width: 100px;
    display: table;
  `;

  Logo = styled.img`
    height: 100%;
    width: 100%;
  `;

  NavContent = styled.ul`
    margin: 7px 0;
  `;

  NavItem = styled.li`
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    & + li {
      margin-left: 20px;
    }
  `;

  // NavAncher = styled.div(({ theme }) => ({color: theme.red}));

  NavAncher = styled.a`
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.2s ease;
    &:hover {
      color: ${Themes.old.brandColorTextHover}
    }
  `

  LogoFunc = () => {
    return (
      <this.LogoWrapper
        href='/'>
        <this.Logo
          src='images/iotplace.svg'
          alt='IoTplace Logo'/>
      </this.LogoWrapper>
    );
  };
  
NavFunc = () => {
    return (
      <this.NavContent>
        <this.NavItem>
          <this.NavAncher
            href="">
              Discover
          </this.NavAncher>
        </this.NavItem>
        <this.NavItem>
          <this.NavAncher
            href="">
              WatchList
          </this.NavAncher>
        </this.NavItem>
      </this.NavContent>
    );
  };

  render() {
    return (
      <ColorThemeContext.Consumer>
        {() => (
          <div className='nav-wrapper'>
            <this.NavContainer>
              <this.LogoFunc />
              <this.NavFunc />
            </this.NavContainer>
          </div>
        )}
      </ColorThemeContext.Consumer>
    )
  };
};

export default Header;