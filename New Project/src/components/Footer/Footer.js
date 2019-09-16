import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../Themes';
import { Colors } from '../../styles/Colors';

class Footer extends React.Component {

  render() {
    const { blueHaze } = Colors;

    const height = '150';

    const footerItems = `
      display: inline-block;
      vertical-align: middle;
      font-size: 1em;
    `;

    const FooterWrapper = styled.div`
      font-size: 16px;
    `;

    const FooterContainer = styled.div`
      display: table;
      margin: auto;
      padding: calc((${height}px - 1em) / 2) 0;
    `;

    const SpanItem = styled.span`
      ${footerItems}
      color: ${blueHaze};
    `;

    const Email = styled.a`
      ${footerItems}
      color: ${({theme}) => theme.brandColorText};
      &:hover {
        color: ${({theme}) => theme.brandColorTextHover};
      }
    `;

    return (
      <ThemeContext.Consumer>
         {({ theme }) => (
        <FooterWrapper>
          <FooterContainer>
            <SpanItem>&copy; 2019 BlueKiwi.Tech | Any love or feedback? Say&nbsp;</SpanItem>
            <Email theme={theme} href='mailto:hello@bluekiwi.tech'>hello@bluekiwi.tech</Email>
          </FooterContainer>
        </FooterWrapper> 
      )}
      </ThemeContext.Consumer>
    );
  };
};

export default Footer;