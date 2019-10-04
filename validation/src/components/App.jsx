import React from 'react';
import Form from './Form';
import Display from './Display';
import { Provider } from 'react-redux';
import store from '../redux/stores';
import styled from '@emotion/styled/macro';

const WarningText = styled.div({
  textAlign: 'center',
  marginTop: '30px'
});

const PTag = styled.p({
  display: 'inline-block',
  margin: '0',
  color: 'orange',
  '&+p' : { textDecoration: 'underline' }
});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <WarningText>
          <PTag>Warning, your password will be displayed in the Display Section.&nbsp;</PTag>
          <PTag>Do not use any personal Passwords.</PTag>
        </WarningText>
        <Form />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
