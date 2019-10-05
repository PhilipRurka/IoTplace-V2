import { ADD_ENTRY, FAILED_ENTRY, INIT_ENTRIES } from './constants';

const initialState = {
  entries: [],
  errorFields: {}
};

function rootReducer(state = initialState, action) {
  const { type } = action;
  if(type === ADD_ENTRY || type === INIT_ENTRIES) {

    let newState = { entries: state.entries.concat(action.payload.entries) };

    if(type === ADD_ENTRY) {
      const newErrorFiels = {
        errorFields: { ...state.errorFields, ...action.payload.errorFields }
      };
      localStorage.setItem('entries', JSON.stringify(newState));
      newState = { ...newState, ...newErrorFiels };
    };

    return Object.assign({}, state, newState);
  } else if(type === FAILED_ENTRY) {
    return Object.assign({}, state, {
      errorFields: {...action.payload.errorFields}
    });
  } else if(type === INIT_ENTRIES) {
    return Object.assign({}, state, {
      entries: { entries: state.entries.concat(action.payload.entries) }
    });
  };

  return state;
};

export default rootReducer;