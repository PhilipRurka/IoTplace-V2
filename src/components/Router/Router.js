import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListPage from '../ProductListPage/ProductListPage';
import ProductPage from '../ProductPage/ProductPage';
import NotFound from '../NotFound/NotFound';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <ProductListPage {...props} products={this.props.products} />}
            />
          <Route
            exact
            path='/product'
            component={ProductPage} />
          <Route
            component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  };
};

export default Router;