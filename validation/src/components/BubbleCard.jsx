import React from 'react';
import styled from '@emotion/styled/macro';

const Wrapper = styled.div({
  display: 'inline-block'
});

const BubbleCard = (props) => {
  return (
    <Wrapper className='col-md-6'>
      <div className="content">
        {props.children}
      </div>
    </Wrapper>
  );
};

export default BubbleCard;
