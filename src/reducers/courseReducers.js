import * as types from '../actions/actionTypes';


export default function courseReducer(state = [], action) {
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
    //xxx ... you access this data from action object through
    //given property of the object, which in fact returns the data
      return action.courses;
    case types.CREATE_COURSE:
    //this is wrong, mutating state
      // state.push(action.course);
      // return state;
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
