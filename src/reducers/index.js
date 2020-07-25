import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromCharacters from './characters';
import { createSelector } from 'reselect'

/**
 * root reduces
 */
export default combineReducers({
  characters: fromCharacters.reducer,
  routing: routerReducer
});


/**
 * selectors
 */
export const getCharacters = state => state.characters;
export const getCharactersArray = createSelector(getCharacters, fromCharacters.getCharactersArray);
