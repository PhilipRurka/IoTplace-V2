import React from 'react';
import styled from '@emotion/styled/macro';

const height = '179px';

const Wrapper = styled.div(({ showingRequirements }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: (showingRequirements) ? height : '0',
  transition: 'height 0.5s ease'
}));

const Container = styled.div({
  position: 'absolute',
  top: '10px',
  left: '0',
  height: `calc(${height} - 20px)`,
  width: '100%',
  border: '1px solid #A9E5BB',
  borderRadius: '10px'
});

const Content = styled.div({
  height: '100%',
  padding: '11px 15px'

});

const Label = styled.label({
  marginBottom: '5px'
});

const Ul = styled.ul({
  margin: '0',

});

const Li = styled.li(
  {
    position: 'relative',
    listStyleType: 'none',
    paddingLeft: '20px',
    lineHeight: '1.3em',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translateY(-50%)',
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      backgroundColor: '#A9E5BB'
    }
  }
);

const Span = styled.span({
  fontSize: '14px',
  letterSpacing: '0.5px'
});

const PasswordRequirements = ({ showingRequirements }) => {
  return (
    <Wrapper showingRequirements={showingRequirements}>
      <Container>
        <Content>
          <Label>The following must contain the following:</Label>
          <Ul>
            <Li>
              <Span>atleast 8 characters</Span>
            </Li>
            <Li>
              <Span>atleast 1 uppercase</Span>
            </Li>
            <Li>
              <Span>atleast 1 lowercase</Span>
            </Li>
            <Li>
              <Span>atleast 1 number</Span>
            </Li>
            <Li>
              <Span>atleast 1 special character</Span>
            </Li>
          </Ul>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default PasswordRequirements