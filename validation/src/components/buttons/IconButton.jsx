import React from 'react';
import styled from '@emotion/styled/macro';

export const IconButtonStyled = styled.button(({ color, size, addedStyles, icon }) => {
  let fontColor, bgColor, hoverColor, padding, borderWidth, buttonIcon;

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
    padding = '10px';
    borderWidth = '8px';
  } else if(size === 'sm') {
    padding = '5px';
    borderWidth = '4px';
  };

  if(icon === 'minus') {
    buttonIcon = 'url("/images/minus.svg")';
  };

  const setStyles = {
    borderStyle: 'solid',
    borderRadius: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: padding,
    borderWidth: borderWidth,
    color: fontColor,
    borderColor: bgColor,
    backgroundColor: bgColor,
    '&:hover': {
      backgroundColor: hoverColor,
      borderColor: hoverColor
    },
    backgroundImage: buttonIcon
  }

  return {...setStyles, ...addedStyles};
});


const IconButton = ({
  type,
  color,
  size,
  addedStyles,
  handleClick = null,
  icon
}) => {

  return (
    <IconButtonStyled
      type={type}
      color={color}
      size={size}
      addedStyles={addedStyles}
      onClick={handleClick}
      icon={icon}
    />
  );
};

export default IconButton;