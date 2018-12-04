import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

//xxx this is very important, because in courseReducers.js ...
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

//thunk -> returns function
export function loadAuthors() {
  return function(dispatch) {
    //this is thunk
    return authorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error => {
      throw(error);
    });
  };
}
