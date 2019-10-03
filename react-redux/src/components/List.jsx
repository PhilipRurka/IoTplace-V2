import React from 'react';
import { connect } from 'react-redux';

const mapToStateToProps = (state) => ({ articles: state.articles });

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(element => (
      <li className="list-group-item" key={element.id}>
        {element.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapToStateToProps) (ConnectedList);

export default List;

/**
 * 
 * The Redux Steps are the following:
 *  1. The store is created by the store.js. That is being called from the index.js, *<Provider store={store}>*. The Provider wraps a subset of elemtents and components and each component within the Provider wrapper is given the store as a prop.
 *  2. When the connect function is called, it connects the mapToStateToProps with the ConnectedList constant. The mapToStateToProps's param is provided by Redux via connect().
 *  3. The mapToStateToProps function combined with connect() makes it so when the state changes, the ConnectedList constant gets called with the state.article being its param.
 * 
 */