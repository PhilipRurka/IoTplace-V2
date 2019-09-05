import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListPage from '../ProductListPage/ProductListPage';
import Product from '../Product/Product';
import NotFound from '../NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ProductListPage} />
      <Route exact path='/product' component={Product} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;