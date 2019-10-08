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

