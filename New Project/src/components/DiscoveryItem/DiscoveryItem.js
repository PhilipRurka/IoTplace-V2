import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../Themes';

const DiscoveryCardWrapper = styled.div`
  ${({wrapperStyle}) => wrapperStyle }
  border-radius: 5px;
  overflow: hidden;
`;

const  DiscoveryCardContainer = styled.div`
  position: relative;
  padding-bottom: calc(100% * 0.4379845);
`;

const DiscoveryCardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ item }) => `background-image: url('/images/discovers/${item}.jpg');`}

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

const Label = styled.label`
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

function DiscoveryItem(props) {
  const { item, wrapperStyle } = props;
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <DiscoveryCardWrapper item={wrapperStyle} >
          <DiscoveryCardContainer>
            <DiscoveryCardContent theme={theme} item={item}>
              <Label>{item}</Label>
            </DiscoveryCardContent>
          </DiscoveryCardContainer>
        </DiscoveryCardWrapper>
      )}
    </ThemeContext.Consumer>
  );
}

export default DiscoveryItem;