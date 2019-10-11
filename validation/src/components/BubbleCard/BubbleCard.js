import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const Wrapper = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: '15px',
  padding: '15px'
});

const Container = styled.div(() => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  border: `2px solid ${colorTheme.primaryBorder}`,
  borderRadius: '10px',
  padding: '15px 20px',
  backgroundColor: colorTheme.secondaryBackground,
  boxShadow: `0 0 13px ${colorTheme.primaryShadow}`
}));

const H1 = styled.h1(() => ({
  color: colorTheme.primaryCopy,
  margin: '0',
}));

const Content = styled.div({
  margin: '15px 0'
});
/** End End End End End End End End End */


const BubbleCard = ({ label, children, theme }) => {
  colorTheme = ColorTheme[theme];

  return (
    <Wrapper className='col-md-6'>
      <Container>
        <H1>{label}</H1>
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default BubbleCard;
