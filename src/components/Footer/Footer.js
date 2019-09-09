import React from 'react';
import styled from '@emotion/styled';
import { ColorThemeContext, Themes } from '../../context/theme.js';

const displayInline = `
  display: inline-block;
  vertical-align: middle;
`

const FooterWrapper = styled.div`
  height: 150px;
`;

const FooterContainer = styled.div`
  padding: 64px 0;
  display table;
  margin: auto;
`;

const Span = styled.span`
  ${displayInline}
  color: ${Themes.old.blueHaze}
`;

const Mailto = styled.a`
  ${displayInline}
  color: ${Themes.old.brandColorText};
  &:hover {
    color: ${Themes.old.brandColorTextHover};
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <ColorThemeContext.Consumer>
        {(old) => (
          <FooterWrapper>
            <FooterContainer>
              <Span>&copy; 2019 BlueKiwi.Tech | Any love or feedback? Say&nbsp;</Span>
              <Mailto
                href='mailto: Hello@IoTplace.com'
                >Hello@IoTplace.com</Mailto>
            </FooterContainer>
          </FooterWrapper>
        )}
      </ColorThemeContext.Consumer>
    );
  };
};

export default Footer;