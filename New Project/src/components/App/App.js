import React from 'react';
import './App.scss';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import { ThemeContext, Themes } from '../../Themes';

class App extends React.Component {
  state = {
    hover: {},
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

  /**
   * This is called from the Header component.
   * This adds the "unique" hover item's id to the list.
   */
  addStateHover = (id) => {
    let hoverClone = {...this.state.hover};
    if(hoverClone.id) { return; }
    hoverClone[id] = false;
    this.setState({ hover: hoverClone });
  };

  /**
   * onMouseEnter, the appropriate element gets triggered (hover)
   * onMouseLeave, the trigger affect (hover) goes away.
   */
  toggleHover = (id, isEntering) => {
    let hoverClone = {...this.state.hover};
    hoverClone[id] = isEntering;
    return new Promise((resolve) => {
      return resolve(this.setState({ hover: hoverClone }));
    });
  }

  render() {
    return (
      <div className="global-wrapper">
        <ThemeContext.Provider value={this.state}>
          <Header addStateHover={this.addStateHover} toggleHover={this.toggleHover} state={this.state} />
          {/* <Footer /> */}
        </ThemeContext.Provider>
      </div>
    );
  };
};

export default App;
