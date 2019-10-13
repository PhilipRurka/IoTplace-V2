import React from 'react';
import styled from '@emotion/styled/macro';

import Toast from './Toast/Toast';

class Toaster extends React.Component {

  Wrapper = styled.div({
    position: 'fixed',
    top: '20px',
    right: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  });
  
  dismountToast = (id) => {
    const { props: { deleteToast } } = this;
    deleteToast(id);
  };
  
  render() {
    const { 
      Wrapper,
      dismountToast,
      props: {
        theme,
        toastList
      }
     } = this;

    return (
      <Wrapper>
        {Object.keys(toastList).map((id) => {
          return (
          <Toast
            key={id}
            id={id}
            dismountToast={dismountToast}
            label={toastList[id]}
            theme={theme}
          />
          )
        })}
      </Wrapper>
    );
  };
};

export default Toaster;