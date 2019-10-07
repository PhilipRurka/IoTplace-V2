const colors = {
  white:                            '#ffffff',
  grayApprox:                       '#818181',
  mintCream:                        '#f5fffa',
  babyBlue:                         '#e1fffe',
  anakiwa:                          '#9ffffc',
  peppermint:                       '#DEF5DE',
  chinook:                          '#A9E5BB',
  malachite:                        '#1cc950',
  mountainMeadow:                   '#1AB749',
  emerald:                          '#4CCD4B',
  apple:                            '#46BB45',
  flushMahogany:                    '#C93238',
  punch:                            '#DD373D',
  mangoTango:                       '#DC8201',
  tangerine:                        '#F18F01',
  stTropaz:                         '#235789',
  mirage:                           '#161925',
  black:                            '#000000'
};

const colorTheme = {
  cloud: {
    progression:                    colors.malachite,
    progressionHover:               colors.mountainMeadow,
    warning:                        colors.tangerine,
    warningHover:                   colors.mangoTango,
    error:                          colors.punch,
    errorHover:                     colors.flushMahogany,
    primaryBorder:                  colors.chinook,
    primaryShadow:                  colors.anakiwa,
    primaryBackground:              colors.mintCream,
    secondaryBackground:            colors.white,
    thirdaryBackground:             colors.babyBlue,
    primaryCopy:                    colors.black,
    secondaryCopy:                  colors.grayApprox
  },
  nightVision: {
    progression:                    colors.emerald,
    progressionHover:               colors.apple,
    warning:                        colors.tangerine,
    warningHover:                   colors.mangoTango,
    error:                          colors.punch,
    errorHover:                     colors.flushMahogany,
    primaryBorder:                  colors.emerald,
    primaryShadow:                  colors.emerald,
    primaryBackground:              colors.mirage,
    secondaryBackground:            colors.peppermint,
    thirdaryBackground:             colors.white,
    primaryCopy:                    colors.stTropaz,
    secondaryCopy:                  colors.grayApprox
  }
};

export default colorTheme;