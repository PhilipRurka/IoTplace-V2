import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const FieldStyled = styled.div(({ TopChild, Half }) => ({
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: (TopChild) ? '0' : '20px',
  flexBasis: (Half) ? 'calc(50% - 10px)' : '100%',

  'label': {
    color: colorTheme.primaryCopy,
    margin: '0',
    fontWeight: '600',
    letterSpacing: '0.5px',
    display: 'inline-block'
  }
}));
/** End End End End End End End End End */

const Field = ({
  children,
  topChild = null,
  Half = null,
  label = null,
  theme
}) => {

  colorTheme = ColorTheme[theme];

  return (
    <FieldStyled topChild={topChild} Half={Half}>
      <label>{label}</label>
      {children}
    </FieldStyled>
  );
};

export default Field;