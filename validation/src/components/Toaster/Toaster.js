import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

const Wrapper = styled.div({
  position: 'fixed',
  top: '20px',
  right: '0',
});

const Item = styled.div({
  'label': {
    margin: '0'
  }
});

const Container = styled.div(() => ({
  position: 'relative',
  backgroundColor: colorTheme.secondaryBackground,
  color: colorTheme.primaryCopy,
  marginRight: '20px',
  padding: '10px 50px 10px 25px',
  border: `2px solid ${colorTheme.primaryBorder}`,
  borderRadius: '10px',
  boxShadow: `0 0 13px ${colorTheme.primaryShadow}`
}));

const Xicon = styled.div({
  fontSize: '20px',
  fontWeight: 'bold',
  position: 'absolute',
  top: '14px',
  right: '20px',
  lineHeight: '16px',
  cursor: 'pointer'
});

const Toaster = ({ theme, toast }) => {

  colorTheme = ColorTheme[theme];

  return (
    <Wrapper>
      <Item>
        <Container>
          <label>{toast}</label>
          <Xicon>X</Xicon>
        </Container>
      </Item>
    </Wrapper>
  );
};

export default Toaster;