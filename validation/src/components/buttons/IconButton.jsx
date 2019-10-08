import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import PropTypes from 'prop-types';

let colorTheme;

export const IconButtonStyled = styled.button(({ color, size, addedStyles, icon, theme}) => {
  let fontColor, bgColor, hoverColor, padding, borderWidth, buttonIcon;

  if(color === 'green') {
    fontColor = 'white';
    bgColor = colorTheme.progression;
    hoverColor = colorTheme.progressionHover;
  } else if(color === 'orange') {
    fontColor = 'white';
    bgColor = colorTheme.warning;
    hoverColor = colorTheme.warningHover;
  } else if(color === 'red') {
    fontColor = 'white';
    bgColor = colorTheme.error;
    hoverColor = colorTheme.errorHover;
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
  addedStyles = null,
  handleClick = null,
  icon,
  theme
}) => {

  colorTheme = ColorTheme[theme];

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

IconButton.propTypes = {
  theme:          PropTypes.string.isRequired,
  type:           PropTypes.string.isRequired,
  color:          PropTypes.string.isRequired,
  size:           PropTypes.string.isRequired,
  icon:           PropTypes.string.isRequired,
  addedStyles:    PropTypes.object,
  onClick:        PropTypes.func
};

export default IconButton;