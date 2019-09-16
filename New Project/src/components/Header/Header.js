import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../Themes';

class Header extends React.Component {

  render() {

    const HeaderWrapper = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 25px ${this.props.sidePadding};
      z-index: 2;
      background-color: white;
    `;

    const HeaderContainer = styled.div`
      height: 30px;
      display: flex;
      justify-content: space-between;
    `;

    const LogoWrapper = styled.div`
      width: 100px;
    `;

    const Logo = styled.div`
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
      background-image: url('/images/${({theme}) => theme.longLogo}');
    `;

    const NavWrapper = styled.div`
      margin: 5px 0;
    `;

    const NavList = styled.ul`
      list-style: none;
      margin: 0;
    `;

    const NavItem = styled.li`
      display: inline-block;
      & + li {
        margin-left: 15px;
      }
    `;

    const NavAnchor = styled.a`
      font-size: 14px;
      font-weight: 900;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      &:hover {
        color: ${({theme}) => theme.brandColorTextHover};
      }
    `;

    return (
      <ThemeContext.Consumer> 
        {({ theme, toggleTheme }) => (
          <HeaderWrapper>
            <HeaderContainer>
              <LogoWrapper>
                <Logo theme={theme} onClick={toggleTheme}/>
              </LogoWrapper>
              <NavWrapper>
                <div className="nav-container">
                  <NavList>
                    <NavItem>
                      <NavAnchor theme={theme} href='/discover'>Discover</NavAnchor>
                    </NavItem>
                    <NavItem>
                      <NavAnchor theme={theme} href='/watchlist'>Watchlist</NavAnchor>
                    </NavItem>
                  </NavList>
                </div>
              </NavWrapper>
            </HeaderContainer>
          </HeaderWrapper>
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default Header;