/**
 * The Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
 * 
 * CreateStore takes a reducer as the first argument or an initial state which is useful for server side rendering.
 * 
 * The state of the application lives as a single, immutable object within the store.
 * As soon as the store receives an action it triggers a reducer.
 * The reducer returns the next state.
 * 
 * The Store has has an API:
 * - getState for accessing the current state of the application
 * - dispatch for dispatching an action
 * - subscribe for listening on state changes
 * 
 * SUBSCRIBE SUBSCRIBE SUBSCRIBE
 * The subscribe method accepts a callback that will fire whenever an action is dispatched. Dispatching an action means notifying the store that we want to change the state. Example: 
 * - store.subscribe(() => console.log('Look ma, Redux!!'))
 * 
 * DISPATCH DISPATCH DISPATCH
 * To change the state in Redux we need to dispatch an action. To dispatch an action you have to call the dispatch method. Example:
 * - store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
 */

import { createStore } from "redux";
import rootReducer from "./reducer";
const store = createStore(rootReducer);

export default store;