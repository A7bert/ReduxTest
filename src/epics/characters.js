import { ajax } from 'rxjs/observable/dom/ajax';
import * as fromCharacters from '../actions/characters';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

export const fetchCharacters = (action$) =>
  action$.ofType(fromCharacters.FETCH_CHARACTERS)
    .switchMap(() =>
      ajax.get(`/api/quotes`)
        .map(ajaxRes => ajaxRes.response)
        .map(fromCharacters.loadCharacters)
        .catch(e => console.log(e))
    );