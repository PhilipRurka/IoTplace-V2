import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

class Toast extends React.Component {
  state = {
    currentStep: null
  };

  Wrapper = styled.div({
    position: 'relative',
    display: 'table',
    marginLeft: 'auto',
    '& + div': { marginTop: '12px' }
  });

  containerStyled = () => ({
    backgroundColor: colorTheme.secondaryBackground,
    color: colorTheme.primaryCopy,
    marginRight: '20px',
    padding: '10px 50px 10px 25px',
    border: `2px solid ${colorTheme.primaryBorder}`,
    borderRadius: '10px',
    boxShadow: `0 0 13px ${colorTheme.primaryShadow}`,

    'label': {
      margin: '0',
      whiteSpace: 'noWrap'
    }
  });

  InvisibleContainer = styled.div(() => {
    const { containerStyled, state: { currentStep } } = this;
    let animation = null;

    if(currentStep === 1) {
      animation = { right: '0' };

    } else if(currentStep === 3) {
      animation = { height: '0' };
    };

    return {
      ...containerStyled(),
      position: 'relative',
      display: 'inline-block',
      overflow: 'hidden',
      marginLeft: 'auto',
      right: 'calc(-100% - 20px)',
      height: '48px',
      transition: 'right 0.5s ease, height 0.5s ease',
      ...animation
    };
  });

  VisibleContainer = styled.div(() => {
    const { containerStyled } = this;

    return {
      display: 'none',
      ...containerStyled(),
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
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

  componentDidMount() {

    const step1 = 100;
    const step2 = step1 + 3000;
    const step3 = step1 + step2 + 500;

    setTimeout(() => {
      this.setState({ currentStep: 1 });
    }, step1);

    // setTimeout(() => {
    //   this.setState({ currentStep: 2 });
    // }, step2 );
    
    // setTimeout(() => {
    //   this.setState({ currentStep: 3 });
    // }, step3);

    // setTimeout(() => {
    //   this.dismount();
    // }, 5000);
  };

  dismount = () => {
    const { props: { dismountToast, id } } = this;
    dismountToast(id);
  };

  Content = () => {
    const {
      Xicon,
      dismount,
      props: {
        label,
        id
      }
    } = this;

    return (
      <div>
        <label>{label}</label>
        <Xicon
          onClick={() => (dismount(id))}
        >X</Xicon>
      </div>
    );
  };

  render() {
    const {
      Wrapper,
      InvisibleContainer,
      VisibleContainer,
      Content,
      props: { theme }
    } = this;

    colorTheme = ColorTheme[theme];

    return (
      <Wrapper>
        <InvisibleContainer>
          <Content />
          <VisibleContainer>
            <Content />
          </VisibleContainer>
        </InvisibleContainer>
      </Wrapper>
    )
  }
};

export default Toast;