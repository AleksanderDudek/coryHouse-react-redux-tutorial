import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch(action.type){
    case types.LOAD_AUTHORS_SUCCESS:
    //xxx ... you access this data from action object through
    //given property of the object, which in fact returns the data
      return action.authors;
    case types.CREATE_AUTHOR:
    //this is wrong, mutating state
      // state.push(action.course);
      // return state;
      return [...state, Object.assign({}, action.author)];
    default:
      return state;
  }
}
