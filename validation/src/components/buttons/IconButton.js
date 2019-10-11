import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import PropTypes from 'prop-types';
import { buttonColor } from '../../helpers/general';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
export const IconButtonStyled = styled.button(({ color, size, addedStyles, icon, theme}) => {
  /** Gets and stores the styles involving color. */
  const buttonColors = buttonColor(color, colorTheme);
  let padding, borderWidth, backgroundImage;

  if(size === 'lg') {
    padding = '10px';
    borderWidth = '8px';
  } else if(size === 'sm') {
    padding = '5px';
    borderWidth = '4px';
  };

  if(icon === 'minus') {
    backgroundImage = 'url("./images/minus.svg")';
  };

  const setStyles = {
    borderStyle: 'solid',
    borderRadius: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding,
    borderWidth,
    backgroundImage,
    ...buttonColors
  }

  return {...setStyles, ...addedStyles};
});
/** End End End End End End End End */

const IconButton = ({
  theme,
  type,
  color,
  size,
  addedStyles = null,
  handleClick = null,
  icon
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

// FRONTEND: This is not working.
IconButton.propTypes = {
  theme:          PropTypes.string.isRequired,
  type:           PropTypes.string.isRequired,
  color:          PropTypes.string.isRequired,
  size:           PropTypes.string.isRequired,
  icon:           PropTypes.string.isRequired,
  addedStyles:    PropTypes.object,
  handleClick:    PropTypes.func
};

export default IconButton;