import React from 'react';

export const Themes = {
  old: {
    brandColorText: '#2cddbb',
    brandColorTextHover: '#21cead',
  
    // Gradient Composition
    brandColorGradient1: '#96F3E5',
    brandColorGradient2: '#12AB8C',

    rgba: 'rgb(18, 171, 140, 0.73)',
    
    // Images
    shortLogo: 'iotplace-icon.svg',
    longLogo: 'iotplace.svg'
  },
  new: {
    brandColorText: '#6250ff',
    brandColorTextHover: '#5645ec',
  
    // Gradient Composition
    brandColorGradient1: '#803FFB',
    brandColorGradient2: '#5A7FFB',

    rgba: 'rgb(86, 69, 236, 0.73)',
  
    longLogo: 'bluekiwi-tech-logo.svg'
  }
};
  
export const ThemeContext = React.createContext({
  theme: Themes.old,
  toggleTheme: () => {}
});

// rgba: 'rgba(18, 171, 251, 73)',