import React from 'react';

class ProductListPage extends React.Component {
  render() {
    return (
      <div className='core-wrapper'>
        <section className='products'>
          <label>Hot And Fresh</label>
          <ul>
            <li>
              <div className='item-image'></div>
              <div className='item-details'>
                <span>Something</span>
                <span>Type</span>
              </div>
            </li>
            <li>
              <div className='item-image'></div>
              <div className='item-details'>
                <span>Something</span>
                <span>Type</span>
              </div>
            </li>
            <li>
              <div className='item-image'></div>
              <div className='item-details'>
                <span>Something</span>
                <span>Type</span>
              </div>
            </li>
            <li>
              <div className='item-image'></div>
              <div className='item-details'>
                <span>Something</span>
                <span>Type</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  };
};

export default ProductListPage;