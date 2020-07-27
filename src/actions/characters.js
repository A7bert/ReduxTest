export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const LOAD_CHARACTER = 'LOAD_CHARACTER';

export function fetchCharacters () {
    return {
        type: FETCH_CHARACTERS,
        payload: null
    }
}

export function loadCharacters (characters) {
    return {
        type: LOAD_CHARACTERS,
        payload: characters
    }
}

export function loadCharacter (character) {
    return {
        type: LOAD_CHARACTER,
        payload: character
    }
}
 