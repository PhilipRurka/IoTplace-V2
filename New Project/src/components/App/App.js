import React from 'react';
import './App.scss';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import { ThemeContext, Themes } from '../../Themes';
import { ST } from './AppStyles';

class App extends React.Component {
  state = {
    theme: {},
    themeType: 'old'
  };

  componentWillMount() {
    this.setState({theme: Themes[this.state.themeType]});
  };

  toggleFunc = () => {
    const newType = (this.state.themeType === 'old') ? 'new' : 'old';
    this.setState({
      themeType: newType,
      theme: Themes[newType]
    });
    console.log(this.state.theme);
  };

  render() {
    return (
      <div className="global-wrapper">
        <ST.ToggleTheme onClick={this.toggleFunc}>
          {(this.state.oldTheme) ? 'Old Theme' : 'New Theme'}
        </ST.ToggleTheme>
        <ThemeContext.Provider value={this.state.theme}>
          <Header />
          {/* <Footer /> */}
        </ThemeContext.Provider>
      </div>
    );
  };
};

export default App;
