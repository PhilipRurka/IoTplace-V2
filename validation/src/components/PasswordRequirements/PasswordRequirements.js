import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import { breaks } from '../../helpers/breakpoints';
import {
  passwordLengthTest,
  passwordUpperTest,
  passwordLowerTest,
  passwordSpecialTest,
  passwordNumberTest
} from '../../helpers/conditions';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
/** Deconstructing */
const { lgBreak, mdBreak } = breaks;
/** Set height depending on break point */
const smallHeight = '179px';
/** Set height depending on break point */
const mediumHeight = '203px';
/** Set height depending on break point */
const largeHeight = '223px';

/** Break Points */
const largeBreakpoint = `@media (min-width: ${mdBreak}) and (max-width: calc(${lgBreak} - 1px))`;
/** Break Points */
const smallBreakpoint = `@media (max-width: 430px)`;
/** Break Points */
const xxsBreakPoint = `@media (max-width: 331px)`;

/** Param => showingRequirements: - (Boolean) - Is the PasswordRequirements component showing? */
const Wrapper = styled.div(({ showingRequirements }) => {
  /** Height for a specific break point. This is required for the transition effect. */
  const heightCondition1 = {
    height: (showingRequirements) ? mediumHeight : '0'
  };

  /** Height for a specific break point. This is required for the transition effect. */
  const heightCondition2 = {
    height: (showingRequirements) ? largeHeight : '0'
  }
  
  return {
    position: 'relative',
    overflow: 'hidden',
    transition: 'height 0.5s ease',
    height: (showingRequirements) ? smallHeight : '0',

    /** Break Points */
    [largeBreakpoint]: { ...heightCondition1 },
    [smallBreakpoint]: { ...heightCondition1 },
    [xxsBreakPoint]: { ...heightCondition2 },
  };
});

const Container = styled.div(() => {
  /** Height for a specific break point. */
  const heightCondition1 = {
    height: `calc(${mediumHeight} - 20px)`
  };

/** Height for a specific break point. */
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

    /** Break Points */
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

/** Param => success: - (Boolean) - Has the specific requirement been met? */
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
/** End End End End End End End End End */

const PasswordRequirements = ({ showingRequirements, password, theme }) => {
  /** Object containing the list of requirements and whether they have succeeded or not. */
  let successRequirements = {
    minCharacter: passwordLengthTest(password),
    upperCase: passwordUpperTest(password),
    lowerCase: passwordLowerTest(password),
    special: passwordSpecialTest(password),
    number: passwordNumberTest(password)
  };

  /** Deconstructing */
  const {
    minCharacter,
    upperCase,
    lowerCase,
    special,
    number
  } = successRequirements;

  colorTheme = ColorTheme[theme];

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