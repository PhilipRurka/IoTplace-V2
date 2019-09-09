import React from 'react';
import styled from '@emotion/styled';

class ProductShowcaseCard extends React.Component {
  Wrapper = styled.div`
    font-size: 0;
    width: calc(25% - 10px);
  `;

  Container = styled.div`
    position: relative;
    font-size: 1rem;
    background-color: gray;
    padding-bottom: 100%;
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
    background-image: url(/images/products.jpg);
  `;

  Image = styled.div`
    
  `;

  Name = styled.label`
  
  `;

  Type = styled.span`

  `;

  render() {
    return (
      <this.Wrapper>
        <this.Container>
          <this.Content>
            <this.ImageWrapper>
              <this.Image></this.Image>
            </this.ImageWrapper>
            <this.Name>{this.props.product.name}</this.Name>
            <this.Type></this.Type>
          </this.Content>
        </this.Container>
      </this.Wrapper>
    );
  };
};

export default ProductShowcaseCard;