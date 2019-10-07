import React from 'react';
import Form from './Form';
import Display from './Display';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import ColorTheme from '../themes/colors';
  let colorTheme;
  
const mapToStateToProps = (state) => ({ theme: state.theme });

const GlobalWrapper = styled.div(() => ({
  height: '100%',
  minHeight: '100vh',
  backgroundColor: colorTheme.primaryBackground
}));

const WarningText = styled.div({
  textAlign: 'center',
  marginTop: '30px',
  display: 'inline-block'
});

const PTag = styled.p({
  display: 'inline-block',
  margin: '0',
  color: 'orange',
  '&+p' : { textDecoration: 'underline' }
});

const App = ({ theme }) => {
  colorTheme = ColorTheme[theme];

  return (
    <GlobalWrapper>
      <div className="container">
        <WarningText>
          <PTag>Warning, your password will be displayed in the Display Section.&nbsp;</PTag>
          <PTag>Do not use any personal Passwords.</PTag>
        </WarningText>
        <Form />
        <Display />
      </div>
    </GlobalWrapper>
  );
};

const connectedForm = connect(mapToStateToProps) (App);

export default connectedForm;
