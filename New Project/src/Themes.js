import React from 'react';

export const Themes = {
  old: {
    // Default Colors
    white: '#fff',
    black: '#000',
  
    // Site Colors
    martinique: '#2f334a',
    turquoise: '#2cddbb',
    turquoiseThin: '#21cead',
    flamingo: '#ff8da6',
  
    brandColorText: '#6250ff',
    brandColorTextHover: '#5645ec',
  
    // Gradient Composition
    brandColorGradient1: '#803FFB',
    brandColorGradient2: '#5A7FFB',
  
    // Blue-Haze
    // ELEMENTS: Secondary Text, Footer Text, Category Text, Price Text
    blueHaze: '#B9B9D0', // Secondary Text Font Color. (Footer, Caterogy, Price)
  
    // Athens-Gray
    // ELEMENTS: Product background
    athensGray: '#f4f3f8',
    
    // Images
    shortLogo: 'iotplace-icon.svg',
    longLogo: 'iotplace.svg'
  },
  new: {
    // Default Colors
    white: '#fff',
    black: '#000',
  
    // Site Colors
    martinique: '#2f334a',
    turquoise: '#2cddbb',
    turquoiseThin: '#21cead',
    flamingo: '#ff8da6',
  
    brandColorText: '#6250ff',
    brandColorTextHover: '#5645ec',
  
    // Gradient Composition
    brandColorGradient1: '#803FFB',
    brandColorGradient2: '#5A7FFB',
  
    // Blue-Haze
    // ELEMENTS: Secondary Text, Footer Text, Category Text, Price Text
    blueHaze: '#B9B9D0', // Secondary Text Font Color. (Footer, Caterogy, Price)
  
    // Athens-Gray
    // ELEMENTS: Product background
    athensGray: '#f4f3f8',
    longLogo: 'bluekiwi-tech-logo.svg'
  }
};
  
export const ThemeContext = React.createContext({
  theme: Themes.old,
  toggleTheme: () => {}
});