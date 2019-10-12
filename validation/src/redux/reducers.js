import { formatCamelCase } from '../helpers/general';
import uuid from 'uuid';
import {
  ADD_ENTRY,
  INIT_ENTRIES,
  REMOVE_ENTRY,
  REMOVE_ALL_ENTRIES,
  TOGGLE_THEME,
  UPDATE_FORM,
  TOGGLE_REQUIREMENTS,
  DELETE_TOAST
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
  },
  toaster: {
    toastList: {},
    flicker: false
  }
};

// Look into moving some of this logic into the middleware.
function rootReducer(state = initialState, action) {
  const { type, payload, status } = action;
  /** Creates a UUID */
  const id = uuid();
  let newState = Object.assign({}, state);
  let toaster = Object.assign({}, state.toaster);
  let { toastList } = toaster;

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
      
      toastList[id] = 'New Entry Successfully Added!';

      changes = {
        entries,
        errorFields: { ...state.errorFields, ...payload.errorFields },
        form,
        toaster
      };

      changes.toaster.flicker = !changes.toaster.flicker;

    } else {
      changes = { errorFields: { ...payload.errorFields } };
    };

    newState = Object.assign({}, newState, { ...changes });

    return newState;

    
  /** INIT_ENTRIES - INIT_ENTRIES - INIT_ENTRIES - INIT_ENTRIES */
  } else if(type === INIT_ENTRIES) {

    toastList[id] = 'Welcome Back!';
    toaster.flicker = !toaster.flicker;

    return Object.assign({}, state, {
      entries: state.entries.concat(payload),
      toaster
    });


  /** REMOVE_ENTRY - REMOVE_ENTRY - REMOVE_ENTRY - REMOVE_ENTRY */
  } else if(type === REMOVE_ENTRY) {
    /** Copying and pasting Entries into its own constant. */
    const entries = [...state.entries];

    /** The payload here is the index of the array item. */
    entries.splice(payload, 1);
    localStorage.setItem('entries', JSON.stringify({ entries }));

    toastList[id] = 'Selected Entry Has Been Removed!';
    toaster.flicker = !toaster.flicker;

    return Object.assign({}, state, {
      entries,
      toaster
    });


  /** REMOVE_ALL_ENTRIES - REMOVE_ALL_ENTRIES - REMOVE_ALL_ENTRIES */
  } else if(type === REMOVE_ALL_ENTRIES) {
    const entries = [];
    /** Setting the entries to LocalStorage */
    localStorage.setItem('entries', JSON.stringify(entries));
    
    toastList[id] = 'All Entries Have Been Removed!';
    toaster.flicker = !toaster.flicker;

    return Object.assign({}, state, {
      entries,
      toaster
    });


  /** TOGGLE_THEME - TOGGLE_THEME - TOGGLE_THEME - TOGGLE_THEME */
  } else if(type === TOGGLE_THEME) {
    /** Toggling in between two themes. */
    const theme = (state.theme === 'cloud')
      ? 'nightVision' : 'cloud';

    const formatedTheme = formatCamelCase(theme);

    toastList[id] = `Enjoy the ${formatedTheme}!`;
    toaster.flicker = !toaster.flicker;

    return Object.assign({}, state, {
      theme,
      toaster
    });


  /** UPDATE_FORM - UPDATE_FORM - UPDATE_FORM - UPDATE_FORM */
} else if(type === UPDATE_FORM) {
  const { name, value } = payload;

  newState.form[name] = value;

  return newState;


/** TOGGLE_REQUIREMENTS - TOGGLE_REQUIREMENTS - TOGGLE_REQUIREMENTS */
} else if(type === TOGGLE_REQUIREMENTS) {
  /** Toggling in between two options. */
  const showingRequirements = (state.showingRequirements) ? false : true;

  return Object.assign({}, state, { showingRequirements })
  

} else if(type === DELETE_TOAST) {
  newState.toaster.flicker = !newState.toaster.flicker;
  delete newState.toaster.toastList[payload];

  return newState;
};

return state;
};

export default rootReducer;







/**
 * toast: {
 *  id: Text
 * }
 * 
 * On the object key map, loop over the keys and display them.
 * Pass the Id as a prop and when the time is up or the x is clicked, pass the id back and remove it from the array list!
 */