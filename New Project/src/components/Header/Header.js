import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext, Themes } from '../../Themes';

const anchorItems = [
  {
    href:'/discover',
    text: 'Discover'
  },
  {
    href:'/watchlist',
    text: 'Watchlist'
  }
]

class Header extends React.Component {

  navAnchorItems = (href, text, theme) => {
    return new Promise((resolve) => {
      const id = (Math.random() * 1e17).toString();
      return resolve(this.props.addStateHover(id));
    })
    .then((id) => {
      const style = { color: (this.props.state.hover.id) ? 'black' : theme.brandColorTextHover};
  
      return (
        <this.NavItem>
          <this.NavAnchor href={href} onMouseEnter={() => this.props.toggleHover(id, true)} onMouseLeave={() => this.props.toggleHover(id, false)} style={style}>{text}</this.NavAnchor>
        </this.NavItem>
      );
    })
  };

  HeaderWrapper = styled.div`
    padding: 25px 0;
  `;

  HeaderContainer = styled.div`
    height :30px;
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

  NavWrapper = styled.div`
    margin: 5px 0;
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

  NavAnchor = styled.div``;

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <this.HeaderWrapper>
            <this.HeaderContainer>
              <this.LogoWrapper>
                <this.Logo onClick={toggleTheme} style={{backgroundImage: `url('${theme.longLogo}')`}} />
              </this.LogoWrapper>
              <this.NavWrapper>
                <div className="nav-container">
                  <this.NavList>
                    {this.navAnchorItems(theme)}
                  </this.NavList>
                </div>
              </this.NavWrapper>
            </this.HeaderContainer>
          </this.HeaderWrapper>
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default Header;