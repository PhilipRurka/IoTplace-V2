import React from 'react';
import styled from '@emotion/styled/macro';

class Toast extends React.Component {

  ToastStyled = styled.div({
    '& + div': { marginTop: '20px' }
  })

  dismount = () => {
    const { props: { dismount, id } } = this;
    dismount(id);
  };

  render() {
    const { ToastStyled, props: { children } } = this;

    return (
      <ToastStyled>{children}</ToastStyled>
    )
  }
};

export default Toast;