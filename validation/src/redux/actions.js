import { ADD_ENTRY_MIDDLE, INIT_ENTRIES } from './constants';

export function addEntry(payload) {
  return { type: ADD_ENTRY_MIDDLE, payload };
};

export function initEntries(payload) {
  return { type: INIT_ENTRIES, payload };
};