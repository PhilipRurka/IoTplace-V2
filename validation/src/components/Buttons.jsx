import React from 'react';
import styled from '@emotion/styled/macro';

/** Styled Styled Styled Styled Styled Styled Styled Styled Styled */
const BasicButtonStyled = styled.button(({ color, size, addedStyles }) => {
  /** Color Color Color Color Color Color Color Color Color */
  let buttonColor;

  if(color === 'green') {
    buttonColor = {
      color: 'white',
      borderColor: '#1cc950',
      backgroundColor: '#1cc950',
      '&:hover': {
        backgroundColor: '#15933B'
      }
    };

  } else if(color === 'orange') {
    buttonColor = {
      color: 'white',
      borderColor: '#F18F01',
      backgroundColor: '#F18F01',
      '&:hover': {
        backgroundColor: '#B06901'
      }
    };
  } else if(color === 'red') {
    buttonColor = {
      color: 'white',
      borderColor: '#C1292E',
      backgroundColor: '#C1292E',
      '&:hover': {
        backgroundColor: '#8D1E22'
      }
    };
  };
  /** End End End End End End End End End */

  /** Size Size Size Size Size Size Size Size Size */
  let buttonSize;

  if(size === 'lg') {
    buttonSize = {
      padding: '10px 20px',
      fontSize: '16px'
    };

  } else if(size === 'sm') {
    buttonSize = {
      padding: '5px 15px',
      fontSize: '13px',
    };
  };
  /** End End End End End End End End End */

  const setStyles = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '10px',
    letterSpacing: '0.5px',
    fontWeight: '600'
  }

  return {...setStyles, ...buttonColor, ...buttonSize, ...addedStyles};
});

export const MinButtonStyled = styled.button(({ color, size, addedStyles, icon }) => {
  /** Color Color Color Color Color Color Color Color Color */
  let buttonColor;

  if(color === 'green') {
    buttonColor = {
      color: 'white',
      borderColor: '#1cc950',
      backgroundColor: '#1cc950',
      '&:hover': {
        backgroundColor: '#15933B'
      }
    };

  } else if(color === 'orange') {
    buttonColor = {
      color: 'white',
      borderColor: '#F18F01',
      backgroundColor: '#F18F01',
      '&:hover': {
        backgroundColor: '#B06901'
      }
    };
  } else if(color === 'red') {
    buttonColor = {
      color: 'white',
      borderColor: '#C1292E',
      backgroundColor: '#C1292E',
      '&:hover': {
        backgroundColor: '#8D1E22',
        borderColor: '#8D1E22'
      }
    };
  };
  /** End End End End End End End End End */

  /** Size Size Size Size Size Size Size Size Size */
  let buttonSize;

  if(size === 'lg') {
    buttonSize = {
      padding: '10px',
      borderWidth: '8px',
    };

  } else if(size === 'sm') {
    buttonSize = {
      padding: '5px',
      borderWidth: '4px',
    };
  };
  /** End End End End End End End End End */

  /** ButtonType ButtonType ButtonType ButtonType ButtonType ButtonType */
  let buttonIcon;

  if(icon === 'minus') {
    buttonIcon = {
      backgroundImage: 'url("/images/minus.svg")'
    };
  };

  /** End End End End End End End End End */

  const setStyles = {
    borderStyle: 'solid',
    borderRadius: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }

  return {...setStyles, ...buttonColor, ...buttonSize, ...buttonIcon, ...addedStyles};
});
/** End End End End End End End End End */

/** Components Components Components Components Components Components */
export const BasicButton = ({
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

export const MinButton = ({
  type,
  color,
  size,
  addedStyles,
  handleClick = null,
  icon
}) => {

  return (
    <MinButtonStyled
      type={type}
      color={color}
      size={size}
      addedStyles={addedStyles}
      onClick={handleClick}
      icon={icon}
    />
  );
};
/** End End End End End End End End End */

