import React from 'react';
import styled from '@emotion/styled';
import ProductShowcaseCard from '../ProductShowcaseCard/ProductShowcaseCard';

class ProductListPage extends React.Component {
UL = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

  render() {
    return (
      <div className='core-wrapper'>
        <section className='products'>
          <label>Hot And Fresh</label>
          <this.UL>
            {Object.keys(this.props.products).map(key => 
              <ProductShowcaseCard key={key} product={this.props.products[key]} />
            )}
          </this.UL>
        </section>
      </div>
    )
  };
};

export default ProductListPage;