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

const Li = styled.li(({ success }) => ({
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
    backgroundColor: (success) ? '#A9E5BB' : 'red'
  }
}));

const Span = styled.span({
  fontSize: '14px',
  letterSpacing: '0.5px'
});

const PasswordRequirements = ({ state }) => {
  const { showingRequirements, password } = state;

  let errorRequirements = {};

  errorRequirements.minCharacter = (password.length >= 8);
  errorRequirements.upperCase = (/^(?=.*[A-Z]).+$/.test(password));
  errorRequirements.lowerCase = (/^(?=.*[a-z]).+$/.test(password));
  errorRequirements.special = (/[-#?!@$%^&*-]/.test(password));
  errorRequirements.number = (password.match(/\d+/g) && password.match(/\d+/g).length > 0);

  const { minCharacter, upperCase, lowerCase, special, number } = errorRequirements;

  return (
    <Wrapper showingRequirements={showingRequirements}>
      <Container>
        <Content>
          <Label>The following must contain the following:</Label>
          <Ul>
            <Li success={minCharacter}>
              <Span>atleast 8 characters</Span>
            </Li>
            <Li success={upperCase}>
              <Span>atleast 1 uppercase</Span>
            </Li>
            <Li success={lowerCase}>
              <Span>atleast 1 lowercase</Span>
            </Li>
            <Li success={number}>
              <Span>atleast 1 number</Span>
            </Li>
            <Li success={special}>
              <Span>atleast 1 special character</Span>
            </Li>
          </Ul>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default PasswordRequirements;




// Turn the Password requirement into its own function that lives in a helper file.