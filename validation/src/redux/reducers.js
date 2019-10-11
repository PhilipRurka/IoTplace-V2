import {
  ADD_ENTRY,
  INIT_ENTRIES,
  REMOVE_ENTRY,
  REMOVE_ALL_ENTRIES,
  TOGGLE_THEME,
  UPDATE_FORM,
  TOGGLE_REQUIREMENTS
} from './constants';

const initialState = {
  entries: [],
  theme: 'cloud',
  errorFields: {},
  showingRequirements: false,
  form: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
};

// Look into moving some of this logic into the middleware.
function rootReducer(state = initialState, action) {
  const { type, payload, status } = action;

  /** ADD_ENTRY - ADD_ENTRY - ADD_ENTRY - ADD_ENTRY - ADD_ENTRY */
  if(type === ADD_ENTRY) {
    let changes;
    
    if(status === 'success') {
      /** Adding the new list to the old one. */
      const entries = state.entries.concat(payload.entries);
      /** Setting the entries to LocalStorage */
      localStorage.setItem('entries', JSON.stringify({ entries }));

      const form = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };

      changes = {
        entries,
        errorFields: { ...state.errorFields, ...payload.errorFields },
        form
      };

    } else {
      changes = {
        errorFields: { ...payload.errorFields }
      };
    };

    return Object.assign({}, state, { ...changes });

  /** INIT_ENTRIES - INIT_ENTRIES - INIT_ENTRIES - INIT_ENTRIES */
  } else if(type === INIT_ENTRIES) {
    return Object.assign({}, state, {
      entries: state.entries.concat(payload)
    });

  /** REMOVE_ENTRY - REMOVE_ENTRY - REMOVE_ENTRY - REMOVE_ENTRY */
  } else if(type === REMOVE_ENTRY) {
    /** Copying and pasting Entries into its own constant. */
    const entries = [...state.entries];

    /** The payload here is the index of the array item. */
    entries.splice(payload, 1);
    localStorage.setItem('entries', JSON.stringify({ entries }));

    return Object.assign({}, state, { entries });

  /** REMOVE_ALL_ENTRIES - REMOVE_ALL_ENTRIES - REMOVE_ALL_ENTRIES */
  } else if(type === REMOVE_ALL_ENTRIES) {
    const entries = [];
    /** Setting the entries to LocalStorage */
    localStorage.setItem('entries', JSON.stringify(entries));

    return Object.assign({}, state, { entries });

  /** TOGGLE_THEME - TOGGLE_THEME - TOGGLE_THEME - TOGGLE_THEME */
  } else if(type === TOGGLE_THEME) {
    /** Toggling in between two themes. */
    const theme = (state.theme === 'cloud')
      ? 'nightVision' : 'cloud';

    return Object.assign({}, state, { theme });

  /** UPDATE_FORM - UPDATE_FORM - UPDATE_FORM - UPDATE_FORM */
} else if(type === UPDATE_FORM) {
  const { name, value } = payload;

  let newState = Object.assign({}, state);
  newState.form[name] = value;

  return newState;

/** TOGGLE_REQUIREMENTS - TOGGLE_REQUIREMENTS - TOGGLE_REQUIREMENTS */
} else if(type === TOGGLE_REQUIREMENTS) {
  /** Toggling in between two options. */
  const showingRequirements = (state.showingRequirements) ? false : true;

  return Object.assign({}, state, { showingRequirements })
};

return state;
};

export default rootReducer;