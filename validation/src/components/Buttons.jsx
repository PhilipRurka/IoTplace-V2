import React from 'react';
import styled from '@emotion/styled/macro';

const BasicButton = styled.button(({ color, size, addedSyles }) => {
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
  }
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

  return {...setStyles, ...buttonColor, ...buttonSize, ...addedSyles};
});

const Buttons = ({
  buttonType,
  type,
  color,
  size,
  children,
  addedStyles,
  handleClick = null
}) => {

  if(buttonType === 'basic') {
    return (
      <BasicButton
        type={type}
        color={color}
        size={size}
        addedSyles={addedStyles}
        onClick={handleClick}
        >{children}</BasicButton>
    );
  };
}

export default Buttons;