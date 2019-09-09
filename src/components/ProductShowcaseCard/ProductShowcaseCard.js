import React from 'react';
import styled from '@emotion/styled';

// const H1 = styled.h1({
//   borderRadius: '50%',
//   transition: 'transform 400ms ease-in-out',
//   boxSizing: 'border-box',
//   display: 'flex',
//   ':hover': {
//     transform: 'scale(1.2)'
//   }
// })

const Wrapper = styled.div({
  fontSize: '0;',
  width: 'calc(25% - 10px);'
});

class ProductShowcaseCard extends React.Component {

  Container = styled.div`
    position: relative;
    font-size: 1rem;
    background-color: gray;
    padding-bottom: 100%;
    border-radius: 5px;
    overflow: hidden;
  `;

  Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  `;

  ImageWrapper = styled.div`
    height: calc(100% - 20px);
    width: 100%;
  `;

  Image = styled.div`
    width: calc(100% * 1.3334176575);
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -50% 0;
    background-image: url('/images/products.jpg');

  `;

  Name = styled.label`
  
  `;

  Type = styled.span`

  `;

  render() {
    return (
      <Wrapper>
        <this.Container>
          <this.Content>
            <this.ImageWrapper>
              <this.Image />
            </this.ImageWrapper>
            <this.Name>{this.props.product.name}</this.Name>
            <this.Type></this.Type>
          </this.Content>
        </this.Container>
      </Wrapper>
    );
  };
};

export default ProductShowcaseCard;