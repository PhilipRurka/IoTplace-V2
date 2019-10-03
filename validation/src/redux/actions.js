import { ADD_ENTRY } from './constants';

export function addEntry(payload) {
  return { type: ADD_ENTRY, payload }
};