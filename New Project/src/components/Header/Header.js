import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext, Themes } from '../../Themes';


class Header extends React.Component {

  HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  LogoWrapper = styled.div`
    width: 100px;
  `;

  Logo = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
  `;

  NavList = styled.ul`
    list-style: none;
    margin: 0;
  `;

  NavItem = styled.li`
    display: inline-block;
    & + li {
      margin-left: 15px;
    }
  `;

  NavAnchor = styled.div`
    &:hover {
      color: red;
    }
  `

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="header-wrapper">
            <this.HeaderContainer>
              <this.LogoWrapper>
                <this.Logo style={{backgroundImage: `url('${theme.longLogo}')`}} />
              </this.LogoWrapper>
              <div className="nav-wrapper">
                <div className="nav-container">
                  <this.NavList>
                    <this.NavItem>
                      <this.NavAnchor href="">Discover</this.NavAnchor>
                      <this.NavAnchor href="">Watchlist</this.NavAnchor>
                    </this.NavItem>
                  </this.NavList>
                </div>
              </div>
            </this.HeaderContainer>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default Header;