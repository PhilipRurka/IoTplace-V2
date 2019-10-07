import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../themes/colors';
import { breaks } from '../staticHelpers/breakpoints';

let colorTheme;
const smallHeight = '179px';
const mediumHeight = '203px';
const largeHeight = '223px';
const { lgBreak, mdBreak } = breaks;
const largeBreakpoint = `@media (min-width: ${mdBreak}) and (max-width: calc(${lgBreak} - 1px))`;
const smallBreakpoint = `@media (max-width: 430px)`;
const xxsBreakPoint = `@media (max-width: 331px)`;

const Wrapper = styled.div(({ showingRequirements }) => {
  const heightCondition1 = {
    height: (showingRequirements) ? mediumHeight : '0'
  };

  const heightCondition2 = {
    height: (showingRequirements) ? largeHeight : '0'
  }
  
  return {
    position: 'relative',
    overflow: 'hidden',
    transition: 'height 0.5s ease',
    height: (showingRequirements) ? smallHeight : '0',
    [largeBreakpoint]: { ...heightCondition1 },
    [smallBreakpoint]: { ...heightCondition1 },
    [xxsBreakPoint]: { ...heightCondition2 },
  };
});

const Container = styled.div(() => {
  const heightCondition1 = {
    height: `calc(${mediumHeight} - 20px)`
  };

  const heightCondition2 = {
    height: `calc(${largeHeight} - 20px)`
  };

  return {
    position: 'absolute',
    top: '10px',
    left: '0',
    height: `calc(${smallHeight} - 20px)`,
    width: '100%',
    border: `1px solid ${colorTheme.primaryBorder}`,
    borderRadius: '10px',
    [largeBreakpoint]: { ...heightCondition1 },
    [smallBreakpoint]: { ...heightCondition1 },
    [xxsBreakPoint]: { ...heightCondition2 },
  };
});

const Content = styled.div({
  height: '100%',
  padding: '11px 15px'
});

const Label = styled.label({
  marginBottom: '5px',
});

const Ul = styled.ul({
  margin: '0'
});

const Li = styled.li(({ success }) => ({
  position: 'relative',
  listStyleType: 'none',
  paddingLeft: '20px',
  lineHeight: '1.3em',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '6px',
    left: '0',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: (success)
      ? colorTheme.primaryBorder : colorTheme.error
  }
}));

const Span = styled.span({
  fontSize: '14px',
  letterSpacing: '0.5px'
});


const PasswordRequirements = ({ state }) => {
  const { showingRequirements, password } = state;
  colorTheme = ColorTheme[state.theme];
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