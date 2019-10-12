import React from 'react';
import styled from '@emotion/styled/macro';

class Toast extends React.Component {

  ToastStyled = styled.div({
    '& + div': { marginTop: '20px' }
  });

  componentDidMount() {
    setTimeout(() => {
      this.dismount();
    }, 3000);
  };

  dismount = () => {
    const { props: { dismountToast, id } } = this;
    dismountToast(id);
  };

  render() {
    const { ToastStyled, props: { children } } = this;

    return (
      <ToastStyled>{children}</ToastStyled>
    )
  }
};

export default Toast;