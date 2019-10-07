import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';

export const IconButtonStyled = styled.button(({ color, size, addedStyles, icon, theme}) => {
  let fontColor, bgColor, hoverColor, padding, borderWidth, buttonIcon;
  const COLORS = ColorTheme[theme];

  if(color === 'green') {
    fontColor = 'white';
    bgColor = COLORS.progression;
    hoverColor = COLORS.progressionHover;
  } else if(color === 'orange') {
    fontColor = 'white';
    bgColor = COLORS.warning;
    hoverColor = COLORS.warningHover;
  } else if(color === 'red') {
    fontColor = 'white';
    bgColor = COLORS.error;
    hoverColor = COLORS.errorHover;
  };

  if(size === 'lg') {
    padding = '10px';
    borderWidth = '8px';
  } else if(size === 'sm') {
    padding = '5px';
    borderWidth = '4px';
  };

  if(icon === 'minus') {
    buttonIcon = 'url("./images/minus.svg")';
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
  icon,
  theme
}) => {

  return (
    <IconButtonStyled
      type={type}
      color={color}
      size={size}
      addedStyles={addedStyles}
      onClick={handleClick}
      icon={icon}
      theme={theme}
    />
  );
};

export default IconButton;