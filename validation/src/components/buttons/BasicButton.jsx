import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import PropTypes from 'prop-types';
import { buttonColor } from '../../helpers/general';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const BasicButtonStyled = styled.button(({ color, size, addedStyles }) => {
  /** Gets and stores the styles involving color. */
  const buttonColors = buttonColor(color, colorTheme);
  let padding, fontSize;

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
    padding,
    fontSize,
    ...buttonColors
  }

  return {...setStyles, ...addedStyles};
});
/** End End End End End End End End */

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

// FRONTEND: This is not working.
BasicButton.propTypes = {
  theme:          PropTypes.string.isRequired,
  type:           PropTypes.string.isRequired,
  color:          PropTypes.string.isRequired,
  size:           PropTypes.string.isRequired,
  children:       PropTypes.string.isRequired,
  addedStyles:    PropTypes.object,
  handleClick:    PropTypes.func,
};


export default BasicButton;