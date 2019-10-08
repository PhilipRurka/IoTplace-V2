import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import PropTypes from 'prop-types';

let colorTheme;

const BasicButtonStyled = styled.button(({ color, size, addedStyles }) => {
  let fontColor, bgColor, hoverColor, padding, fontSize;

  // Turn this into a helper.
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
  theme,
  type,
  color,
  size,
  children,
  addedStyles = null,
  handleClick = null
}) => {

colorTheme = ColorTheme[theme];

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

BasicButton.propTypes = {
  theme:          PropTypes.string.isRequired,
  type:           PropTypes.string.isRequired,
  color:          PropTypes.string.isRequired,
  size:           PropTypes.string.isRequired,
  children:       PropTypes.string.isRequired,
  addedStyles:    PropTypes.object,
  onClick:        PropTypes.func,
};


export default BasicButton;