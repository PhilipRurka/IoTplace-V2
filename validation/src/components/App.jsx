import React from 'react';
import Form from './Form';
import Display from './Display';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import ColorTheme from '../themes/colors';
import { toggleTheme } from '../redux/actions';

let colorTheme;  
const mapToStateToProps = (state) => ({ theme: state.theme });
const mapDispatchToProps = (dispatch) => ({ toggleTheme: () => dispatch(toggleTheme())});

const GlobalWrapper = styled.div(() => ({
  height: '100%',
  minHeight: '100vh',
  backgroundColor: colorTheme.primaryBackground
}));

const WarningText = styled.div({
  textAlign: 'center',
  marginTop: '30px',
  display: 'inline-block',
  width: '100%',

  'p': {
    display: 'inline-block',
    margin: '0',
    color: 'orange',
    '& + p' : { textDecoration: 'underline' }
  }
});

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
    cursor: 'pointer'
  }
}));

const onClickChangeTheme = (toggleTheme) => {
  toggleTheme();
};

const App = ({ theme, toggleTheme }) => {
  colorTheme = ColorTheme[theme];

  let formatedTheme = theme.replace(/([a-z])([A-Z])/g, '$1 $2');
  formatedTheme = formatedTheme.charAt(0).toUpperCase() + formatedTheme.slice(1);

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
    </GlobalWrapper>
  );
};

const connectedForm = connect(mapToStateToProps, mapDispatchToProps) (App);

export default connectedForm;
