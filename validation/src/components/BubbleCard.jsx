import React from 'react';
import styled from '@emotion/styled/macro';

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const Wrapper = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: '15px',
  padding: '15px'
});

const Container = styled.div({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  border: '2px solid #A9E5BB',
  borderRadius: '10px',
  padding: '15px 20px',
  backgroundColor: 'white',
  boxShadow: '0 0 13px #9ffffc'
});

const H1 = styled.h1({
  margin: '0',
});

const Content = styled.div({
  margin: '15px 0'
});
/** End End End End End End End End End */


const BubbleCard = (props) => {
  return (
    <Wrapper className='col-md-6'>
      <Container>
        <H1>{props.label}</H1>
        <Content>
          {props.children}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default BubbleCard;
