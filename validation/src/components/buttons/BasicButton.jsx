import React from 'react';
import styled from '@emotion/styled/macro';

const BasicButtonStyled = styled.button(({ color, size, addedStyles }) => {
  let fontColor, bgColor, hoverColor, padding, fontSize;

  if(color === 'green') {
    fontColor = 'white';
    bgColor = '#1cc950';
    hoverColor = '#15933B';
  } else if(color === 'orange') {
    fontColor = 'white';
    bgColor = '#F18F01';
    hoverColor = '#B06901';
  } else if(color === 'red') {
    fontColor = 'white';
    bgColor = '#C1292E';
    hoverColor = '#8D1E22';
  };

  if(size === 'lg') {
    padding = '10px 20px';
    fontSize = '16px';
  } else if(size === 'sm') {
    padding = '5px 15px';
    fontSize = '13px';
  };

  const setStyles = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    letterSpacing: '0.5px',
    fontWeight: '600',
    padding: padding,
    fontSize: fontSize,
    color: fontColor,
    borderColor: bgColor,
    backgroundColor: bgColor,
    '&:hover': {
      backgroundColor: hoverColor,
      borderColor: hoverColor
    }
  }

  return {...setStyles, ...addedStyles};
});


const BasicButton = ({
  type,
  color,
  size,
  children,
  addedStyles,
  handleClick = null
}) => {

  return (
    <BasicButtonStyled
      type={type}
      color={color}
      size={size}
      addedStyles={addedStyles}
      onClick={handleClick}
      >{children}</BasicButtonStyled>
  );
};

export default BasicButton;