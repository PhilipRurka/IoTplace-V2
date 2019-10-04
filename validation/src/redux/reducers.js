import { ADD_ENTRY, FAILED_ENTRY } from './constants';

const initialState = {
  entries: [],
  errorFields: {}
};

function rootReducer(state = initialState, action) {
  const { type } = action;
  if(type === ADD_ENTRY) {
    return Object.assign({}, state, {
      entries: state.entries.concat(action.payload.entries),
      errorFields: {...state.errorFields, ...action.payload.errorFields}
    });
  } else if(type === FAILED_ENTRY) {
    return Object.assign({}, state, {
      errorFields: {...action.payload.errorFields}
    });
  };

  return state;
};

export default rootReducer;