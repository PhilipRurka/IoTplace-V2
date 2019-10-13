import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

class Toast extends React.Component {
  state = {
    currentStep: null
  };
  
  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  Wrapper = styled.div(() => {
    const { state: { currentStep } } = this;
    let animation = null;

    if(currentStep === 1) {
      animation = { right: '0' };

    } else if(currentStep === 2) {
      animation = {
        height: '0',
        borderWidth: '0',
        paddingTop: '0',
        paddingBottom: '0',
        marginTop: '0 !important'
      };
    };

    return {
      backgroundColor: colorTheme.secondaryBackground,
      color: colorTheme.primaryCopy,
      marginRight: '20px',
      padding: '10px 50px 10px 25px',
      border: `2px solid ${colorTheme.primaryBorder}`,
      borderRadius: '10px',
      boxShadow: `0 0 13px ${colorTheme.primaryShadow}`,
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 'auto',
      right: 'calc(-100% - 20px)',
      height: '48px',
      transition: 'all 0.5s ease',
      '& + div': { marginTop: '12px' },
      'label': {
        margin: '0',
        whiteSpace: 'noWrap'
      },
      ...animation
    };
  });
  
  Xicon = styled.div({
    fontSize: '20px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '14px',
    right: '20px',
    lineHeight: '16px',
    cursor: 'pointer'
  });
  /** End End End End End End End End End */

  componentDidMount() {
    const { slideOut, stepTimings } = this;
    const steps = stepTimings();
    const { step1, step2 } = steps;

    /** Slide In */
    setTimeout(() => {
      this.setState({ currentStep: 1 });
    }, step1);

    /** Slide Out */
    setTimeout(() => {
      slideOut();
    }, step2);
  };

  stepTimings = () => {
    const step1 = 100;
    const step2 = step1 + 3000;
    const step3 = 5000;

    return { step1, step2, step3 };
  };

  slideOut = () => {
    const { dismount, stepTimings } = this;
    const steps = stepTimings();
    const { step3 } = steps;

    /** Slide Out */
    this.setState({ currentStep: 2 });

    /** Delete Toast */
    setTimeout(() => {
      dismount()
    }, step3);
  };

  dismount = () => {
    const { props: { dismountToast, id } } = this;
    dismountToast(id);
  };

  render() {
    const {
      Wrapper,
      Xicon,
      slideOut,
      props: { theme, label }
    } = this;

    colorTheme = ColorTheme[theme];

    return (
      <Wrapper>
        <label>{label}</label>
        <Xicon
          onClick={() => (slideOut())}
        >X</Xicon>
      </Wrapper>
    );
  };
};

export default Toast;