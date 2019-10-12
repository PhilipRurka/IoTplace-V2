import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';

import Toast from './Toast/Toast';
/** Colors of the current theme. */
let colorTheme;

class Toaster extends React.Component {

  Wrapper = styled.div({
    position: 'fixed',
    top: '20px',
    right: '0'
  });
  
  Container = styled.div(() => ({
    position: 'relative',
    backgroundColor: colorTheme.secondaryBackground,
    color: colorTheme.primaryCopy,
    marginRight: '20px',
    padding: '10px 50px 10px 25px',
    border: `2px solid ${colorTheme.primaryBorder}`,
    borderRadius: '10px',
    boxShadow: `0 0 13px ${colorTheme.primaryShadow}`,
  
    'label': {
      margin: '0'
    }
  }));
  
  Xicon = styled.div({
    fontSize: '20px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '14px',
    right: '20px',
    lineHeight: '16px',
    cursor: 'pointer'
  });
  
  dismountToast = (id) => {
    const { props: { deleteToast } } = this;
    deleteToast(id);
  };
  
  render() {
    const { 
      Wrapper,
      Container,
      Xicon,
      dismountToast,
      props: {
        theme,
        toastList
      }
     } = this;

    colorTheme = ColorTheme[theme];

    return (
      <Wrapper>
        {Object.keys(toastList).map((id) => {
          return (
          <Toast
            key={id}
            id={id}
            dismountToast={dismountToast}
            >
            <Container>
              <label>{toastList[id]}</label>
              <Xicon
              onClick={() => (dismountToast(id))}
              >X</Xicon>
            </Container>
          </Toast>
          )
        })}
      </Wrapper>
    );
  };
};

export default Toaster;