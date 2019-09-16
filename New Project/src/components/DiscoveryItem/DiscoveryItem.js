import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../Themes';

class DiscoveryItem extends React.Component {

  DiscoveryCardWrapper = styled.div`
    ${this.props.wrapperStyle}
    border-radius: 5px;
    overflow: hidden;
  `;

  DiscoveryCardContainer = styled.div`
    position: relative;
    padding-bottom: calc(100% * 0.4379845);
  `;

  DiscoveryCardContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('/images/discovers/${this.props.item}.jpg');

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: background 0.25s ease;
    }

    &:hover::after {
      ${({theme}) => (
        `background: ${theme.rgba};`
      )}
    }
  `;

  Label = styled.label`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    word-spacing: 2px;
    font-weight: 600;
    white-space: nowrap;
    z-index: 1;
  `;

  render() {

    const { DiscoveryCardWrapper, DiscoveryCardContainer, DiscoveryCardContent, Label } = this;

    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <DiscoveryCardWrapper>
            <DiscoveryCardContainer>
              <DiscoveryCardContent theme={theme}>
                <Label>{this.props.item}</Label>
              </DiscoveryCardContent>
            </DiscoveryCardContainer>
          </DiscoveryCardWrapper>
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default DiscoveryItem;