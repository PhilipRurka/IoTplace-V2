import React from 'react';
import Form from './Form';
import Display from './Display';
import { Provider } from 'react-redux';
import store from '../redux/stores';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Form />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
