import {
  ADD_ENTRY,
  FAILED_ENTRY,
  INIT_ENTRIES,
  REMOVE_ENTRY,
  REMOVE_ALL_ENTRIES,
  TOGGLE_THEME,
  UPDATE_PASSWORD,
  TOGGLE_REQUIREMENTS
} from './constants';

const initialState = {
  entries: [],
  theme: 'cloud',
  errorFields: {},
  password: '',
  showingRequirements: false
};

// Look into moving some of this logic into the middleware.
function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  if(type === ADD_ENTRY) {
    const entries = state.entries.concat(payload.entries);
    localStorage.setItem('entries', JSON.stringify({ entries }));


    return Object.assign({}, state, {
      entries,
      errorFields: { ...state.errorFields, ...payload.errorFields }
    });

  } else if(type === FAILED_ENTRY) {
    return Object.assign({}, state, {
      errorFields: {...payload.errorFields}
    });

  } else if(type === INIT_ENTRIES) {
    return Object.assign({}, state, {
      entries: state.entries.concat(payload)
    });

  } else if(type === REMOVE_ENTRY) {
    const entries = [...state.entries];

    let index;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if(payload === entry.id) {
        index = i;
        break;
      };
    };

    entries.splice(index, 1);
    localStorage.setItem('entries', JSON.stringify({ entries }));

    return Object.assign({}, state, { entries });

  } else if(type === REMOVE_ALL_ENTRIES) {
    const entries = [];
    localStorage.setItem('entries', JSON.stringify(entries));

    return Object.assign({}, state, { entries });

  } else if(type === TOGGLE_THEME) {
    const newTheme = (state.theme === 'cloud')
      ? 'nightVision' : 'cloud';

    return Object.assign({}, state, {
      theme: newTheme
    });
  } else if(type === UPDATE_PASSWORD) {
    return Object.assign({}, state, { password: payload });

  } else if(type === TOGGLE_REQUIREMENTS) {
    const showingRequirements = (state.showingRequirements) ? false : true;

    return Object.assign({}, state, { showingRequirements })
  };

  return state;
};

export default rootReducer;