/**
 * Redux actions are nothing more than JavaScript objects.
 * 
 * Every action needs a type property for describing how the state should change. The type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state.
 * 
 * Its better to have action types declared as constants due to typo's.
 * 
 * It is a best pratice to wrap every action within a function. Such function is an action creator.
 */

import { ADD_ARTICLE } from "./constants";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};