import React from 'react';
import Form from '../Form';
import Display from '../Display';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import Toaster from '../Toaster';
import { formatCamelCase } from '../../helpers/general';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const GlobalWrapper = styled.div(() => ({
  height: '100%',
  minHeight: '100vh',
  backgroundColor: colorTheme.primaryBackground
}));

const WarningText = styled.div(() => ({
  textAlign: 'center',
  marginTop: '30px',
  display: 'inline-block',
  width: '100%',

  'p': {
    display: 'inline-block',
    margin: '0',
    color: colorTheme.warning,
    '& + p' : { textDecoration: 'underline' }
  }
}));

const CurrentTheme = styled.div(() => ({
  textAlign: 'center',

  '& > *': {
    color: `${colorTheme.progression}`,

    '&:hover': {
      color: `${colorTheme.progressionHover}`,
    }
  },

  '& > p': {
    display: 'block',
    margin: '30px 0 0'
  },

  'span, span p': {
    display: 'inline-block',
  },

  'span p': {
    margin: '0',
    textDecoration: 'underline',
    cursor: 'pointer',
    userSelect: 'none'
  }
}));
/** End End End End End End End End */

/** Triggered when the theme toggle link is clicked */
const onClickChangeTheme = (toggleTheme) => {
  /** Toggles the theme. */
  toggleTheme();
};

const App = ({ theme, toggleTheme }) => {
  colorTheme = ColorTheme[theme];

  /** This splits up camel case strings. */
  let formatedTheme = formatCamelCase(theme);

  return (
    <GlobalWrapper>
      <div className="container">
        <WarningText>
          <p>Warning, your password will be displayed in the Display Section.&nbsp;</p>
          <p>Do not use any personal Passwords.</p>
        </WarningText>
        <CurrentTheme>
          <p>You are currently in the <strong>{formatedTheme}</strong> theme.</p>
          <span>Click&nbsp;
            <p onClick={() => (onClickChangeTheme(toggleTheme))}>here</p>
          </span>
          <span>&nbsp;to switch theme.</span>
        </CurrentTheme>
        <Form />
        <Display />
      </div>
      <Toaster />
    </GlobalWrapper>
  );
};

export default App;
