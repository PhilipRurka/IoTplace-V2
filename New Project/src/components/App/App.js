import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import ProductsPage from '../ProductsPage/ProductsPage';
import Footer from '../Footer/Footer';
import styled from '@emotion/styled';
import { ThemeContext, Themes } from '../../Themes';

const sidePadding = `30px`;

class App extends React.Component {
  state = {
    theme: {},
    toggleTheme: null
  };

  componentWillMount() {
    this.setState({
      theme: Themes.old,
      toggleTheme: this.toggleTheme
    });
  };

  toggleTheme = () => {
    this.setState({
      theme: (this.state.theme === Themes.new) ? Themes.old : Themes.new
    });
  };

  render() {
    const { state } = this;

    const GlobalWrapper = styled.div`
      padding: 0 ${sidePadding};
      position: relative;
      width: 100vw;
      height: 100vh;
    `;

    const PageWrapper = styled.div`
      padding-top: 80px;
    `;

    return (
      <GlobalWrapper>
        <ThemeContext.Provider value={state}>
          <Header sidePadding={sidePadding} />
          <PageWrapper>
            <ProductsPage />
          </PageWrapper>
          <Footer />
        </ThemeContext.Provider>
      </GlobalWrapper>
    );
  };
};

export default App;
