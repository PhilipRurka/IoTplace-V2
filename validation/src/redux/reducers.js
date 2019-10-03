import { ADD_ENTRY } from './constants';

const initialState = {
  entries: []
};

function rootReducer(state = initialState, action) {
  const { type } = action;
  if(type === ADD_ENTRY) {
    return Object.assign({}, state, {
      entries: state.entries.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;