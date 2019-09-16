import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../Themes';
import { Colors } from '../../styles/Colors';

const { athensGray, stormGray, blueHaze } = Colors;

class ProductShowcase extends React.Component {

  Image = styled.div`
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    ${({image}) => ( `background-image: url('/images/products/${image}');` )}
    transform: scale(1);
    transition: transform 0.25s ease;
  `;

  ProductShowcaseWrapper = styled.div`
    ${this.props.wrapperStyle}
    font-size: 14px;
  `;
    
  ProductShowcaseContainer = styled.div`
    position: relative;
    padding-bottom: 100%;
  `;

  ProductShowcaseContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${athensGray};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      transition: width 0.25s ease;
      ${({theme}) => (
        `background: linear-gradient(to right, ${theme.brandColorGradient1} 0%, ${theme.brandColorGradient2} 100%)`
      )}
    }
    
    &:hover {
      &::after { width: 100%; }
      ${this.Image} { transform: scale(1.1); }
    }
  `;

  ImageWrapper = styled.div`
    height: calc(100% - 3.5em);
    width: calc(100% - 3.5em);
    margin: auto;
    overflow: hidden;
  `;

  copyStyles = `
    font-size: 1em;
    font-weight: 700;
    padding: 0 20px;
  `;

  Name = styled.label`
    ${this.copyStyles}
    color: ${stormGray};
  `;
  
  Description = styled.label`
    ${this.copyStyles}
    color: ${blueHaze};
  `;

  render() {
    const { product } = this.props;
    const { ProductShowcaseWrapper, ProductShowcaseContainer, ProductShowcaseContent, ImageWrapper, Image, Name, Description } = this;

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ProductShowcaseWrapper>
            <ProductShowcaseContainer>
              <ProductShowcaseContent theme={theme}>
                <ImageWrapper>
                  <Image image={product.image} />
                </ImageWrapper>
                <Name>{product.name}</Name>
                <Description>{product.shortDescriptor}</Description>
              </ProductShowcaseContent>
            </ProductShowcaseContainer>
          </ProductShowcaseWrapper>
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default ProductShowcase;