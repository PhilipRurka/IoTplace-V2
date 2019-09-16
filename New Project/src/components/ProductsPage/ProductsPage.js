import React from 'react';
import ProductShowcase from '../ProductShowcase/ProductShowcase';
import DiscoveryItem from '../DiscoveryItem/DiscoveryItem';
import styled from '@emotion/styled';
import { Colors } from '../../styles/Colors';
import { ProductListArray } from '../../ProductMock';

class ProductsPage extends React.Component {
  Section = styled.section`
    & + section { margin-top: 50px; }
  `;

  ProductsPageWrapper = styled.div``;
  ProductsPageContainer = styled.div``;

  flexContainer = `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  itemWrapper = `
    position: relative;
    width: calc(25% - 1em);
    margin-bottom: 1.3333em;
    cursor: pointer;

    & * { cursor: pointer; }
  `;

  SectionLabel = styled.label`
    font-size 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    color: ${Colors.martinique};
  `;

  ProductsListWrapper = styled.div``;
  
  ProductsListContainer = styled.div` ${this.flexContainer} `;
  DiscoveryListContainer = styled.div` ${this.flexContainer} `;
  
  DiscoveryListWrapper = styled.div``;

  DiscoveryListArray = ['Security', 'Wearables', 'Smart Home', 'Outdoors', 'Eco Love', 'Badass Drones', 'Sports', 'Under $100', 'Audio', 'Gadjets', 'Travel'];

  render() {

    const { Section, ProductsPageWrapper, ProductsPageContainer, itemWrapper, SectionLabel, ProductsListWrapper, ProductsListContainer, DiscoveryListContainer, DiscoveryListWrapper, DiscoveryListArray } = this;

    const SectionFunc = (props) => {
      return (
        <Section>
          <SectionLabel>{props.value}</SectionLabel>
          {props.children}
        </Section>
      );
    };

    return (
      <ProductsPageWrapper>
        <ProductsPageContainer>
          <SectionFunc value='Hot And Fresh'>
            <ProductsListWrapper>
              <ProductsListContainer>
                {ProductListArray.map((product) => 
                  <ProductShowcase product={product} key={product.name} wrapperStyle={itemWrapper} />
                )}
              </ProductsListContainer>
            </ProductsListWrapper>
          </SectionFunc>
          <SectionFunc value='Discover'>
            <DiscoveryListWrapper>
              <DiscoveryListContainer>
                {DiscoveryListArray.map((item) => 
                  <DiscoveryItem item={item} key={item} wrapperStyle={itemWrapper} />
                )}
              </DiscoveryListContainer>
            </DiscoveryListWrapper>
          </SectionFunc>
        </ProductsPageContainer>
      </ProductsPageWrapper>
    );
  };
};

export default ProductsPage;