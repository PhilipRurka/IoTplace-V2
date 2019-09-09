import React from 'react';
import Router from '../Router/Router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from '@emotion/styled';
import '../../css/style.css';
import ProductMockData from '../../mockData/ProductMock';
import { ColorThemeContext, Themes } from '../../context/theme';

const GlobalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 50px;
`

class App extends React.Component {
  state = {
    products: {}
  };

  componentDidMount() {
    let productsHash = {};
    for (let i = 0; i < ProductMockData.length; i++) {
      const product = ProductMockData[i];
      productsHash[product.name] = product;
    }

    this.setState({
      products : productsHash,
    });
  }

  render() {
    return(
      <GlobalWrapper>
        <ColorThemeContext.Provider value={Themes}>
          <Header />
          <Router products={this.state.products} />
          <Footer />
        </ColorThemeContext.Provider>
      </GlobalWrapper>
    )
  };
};

// App.contextType = ColorThemeContext;

export default App;