import React from 'react';
import Router from '../Router/Router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { css } from 'emotion';
import '../../css/style.css';

class App extends React.Component {

  // Header
  // Router
  // Footer

  render() {
    return(
      <div
        className={css`
          width: 100vw;
          height: 100vh;
          padding: 0 50px
        `}>
        <Header />
        <Router />
        <Footer />
      </div>
    )
  };
};

export default App;