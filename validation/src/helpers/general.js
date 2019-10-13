/** This is used for returning the correct colors for buttons. */
export const buttonColor = (selectedColor, colorTheme) => {
  let color, backgroundColor, hoverColor;

  if(selectedColor === 'green') {
    color = 'white';
    backgroundColor = colorTheme.progression;
    hoverColor = colorTheme.progressionHover;
  } else if(selectedColor === 'orange') {
    color = 'white';
    backgroundColor = colorTheme.warning;
    hoverColor = colorTheme.warningHover;
  } else if(selectedColor === 'red') {
    color = 'white';
    backgroundColor = colorTheme.error;
    hoverColor = colorTheme.errorHover;
  };

  return {
    color,
    backgroundColor,
    borderColor: backgroundColor,
    '&:hover': {
      backgroundColor: hoverColor,
      borderColor: hoverColor
    }
  }
};

export const formatCamelCase = (string) => {
  /** This splits up camel case strings. */
  let formated = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  /** This uppercase's the first letter of a string. */
  formated = formated.charAt(0).toUpperCase() + formated.slice(1);
  return formated;
};