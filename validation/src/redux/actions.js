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

export function addEntry(payload) {
  return { type: ADD_ENTRY, payload };
};

export function initEntries(payload) {
  return { type: INIT_ENTRIES, payload };
};

export function removeEntry(payload) {
  return { type: REMOVE_ENTRY, payload };
};

export function removeAllEntries() {
  return { type: REMOVE_ALL_ENTRIES };
};

export function toggleTheme() {
  return { type: TOGGLE_THEME };
};

export function updateForm(payload) {
  return { type: UPDATE_FORM, payload };
};

export function toggleRequirements() {
  return { type: TOGGLE_REQUIREMENTS };
};

export function deleteToast(payload) {
  return { type: DELETE_TOAST, payload };
};
