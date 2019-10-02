import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { Provider } from "react-redux";
import store from "./redux/store";

const Project = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Project />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
