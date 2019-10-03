import React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: '15px',
  padding: '15px'
});

const Content = styled.div({
  display: 'inline-block',
  width: '100%',
  border: '2px solid #A9E5BB',
  borderRadius: '10px',
  padding: '15px 20px',
  backgroundColor: 'white',
  boxShadow: '0 0 13px #9ffffc'
});

const H1 = styled.h1({
  margin: '0'
});

const BubbleCard = (props) => {
  return (
    <Wrapper className='col-md-6'>
      <Content>
        <H1>{props.label}</H1>
        {props.children}
      </Content>
    </Wrapper>
  );
};

export default BubbleCard;
