/**
 * The state in redux comes from reducers. Reducers produce the state of your application.
 * 
 * A reducer is just a JavaScript function.
 * 
 * A reducer takes two parameters: the current state and an action.
 * 
 * The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.
 * 
 * Reducer must be pure. A pure function is one that returns the exact same output for the given input. That said, we need a new JavaScript object with Object.assign. This way we keep the original state immutable. Then we can use Array.prototype.concat to keeping the initial array immutable.
 * 
 * Redux protip: the reducer will grow as your app will become bigger. You can split a big reducer into separate functions and combine them with combineReducers
 */

import { ADD_ARTICLE } from "./constants";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;