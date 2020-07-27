import * as fromCharacters from '../actions/characters';
import { createSelector } from 'reselect'

const initialState = {
  ids: [],
  entities: {},
};

console.log(fromCharacters, '123123123')

/**
 * Reduces
 */
export function reducer(state = initialState, action) {
    console.log('what is on')
  switch (action.type) {
    case fromCharacters.LOAD_CHARACTERS: {
      const characters = action.payload;
      const ids = characters.map(c => c._id);
      const entities = characters.reduce((acc, c) => Object.assign(acc, {[c._id]: c}), {});
      return {ids, entities};
    }

    case fromCharacters.LOAD_CHARACTER: {
      const character = action.payload;
      const entities = Object.assign({}, state.entities, {[character._id]: character});
      const ids = Object.keys(entities);
      return {ids, entities};
    }

    default:
      return state;
  }
}

/**
 * Selectors
 */
const getIds = state => state.ids;
const getEntities = state => state.entities;
export const getCharactersArray = createSelector([getIds, getEntities], (ids, entities) => ids.map(id => entities[id]));