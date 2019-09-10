import React from 'react';
import styled from '@emotion/styled';

const HealerHero = styled.h1({
  borderRadius: '50%',
  transition: 'transform 400ms ease-in-out',
  boxSizing: 'border-box',
  display: 'flex',
  ':hover': {
    transform: 'scale(1.2)'
  }
})

class Footer extends React.Component {

  render() {
    return (
      <div>
        <h1 className="footer-wrapper">Footer</h1>
        <HealerHero>Testing</HealerHero>
      </div>
    );
  };
};

export default Footer;