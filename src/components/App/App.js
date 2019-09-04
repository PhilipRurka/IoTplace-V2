import React from 'react';
import Router from '../Router/Router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {

  // Header
  // Router
  // Footer

  render() {
    return(
      <div className="global-wrapper">
        <Header />
        <Router />
        <Footer />
      </div>
    )
  };
};

export default App;