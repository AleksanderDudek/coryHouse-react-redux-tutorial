import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function courseReducer(state = initialState.courses, action) {
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
    //xxx ... you access this data from action object through
    //given property of the object, which in fact returns the data
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
    //filter gets the right course we want to update based
    //on id we pass in through action
    return [
      ...state.filter(course => course.id !== action.course.id),
      Object.assign({}, action.course)
    ];
    case types.CREATE_COURSE:
    //this is wrong, mutating state
      // state.push(action.course);
      // return state;
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
