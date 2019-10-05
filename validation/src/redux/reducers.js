import {
  ADD_ENTRY,
  FAILED_ENTRY,
  INIT_ENTRIES,
  REMOVE_ENTRY,
  REMOVE_ALL_ENTRIES
} from './constants';

const initialState = {
  entries: [],
  errorFields: {}
};

// Look into moving some of this logic into the middleware.
function rootReducer(state = initialState, action) {
  const { type } = action;
  if(type === ADD_ENTRY) {
    const entries = state.entries.concat(action.payload.entries);
    localStorage.setItem('entries', JSON.stringify({ entries }));

    return Object.assign({}, state, {
      entries,
      errorFields: { ...state.errorFields, ...action.payload.errorFields }
    });

  } else if(type === FAILED_ENTRY) {
    return Object.assign({}, state, {
      errorFields: {...action.payload.errorFields}
    });

  } else if(type === INIT_ENTRIES) {
    return Object.assign({}, state, {
      entries: state.entries.concat(action.payload)
    });

  } else if(type === REMOVE_ENTRY) {


  } else if(type === REMOVE_ALL_ENTRIES) {
    const entries = [];
    localStorage.setItem('entries', JSON.stringify(entries));

    return Object.assign({}, state, { entries });
  };

  return state;
};

export default rootReducer;