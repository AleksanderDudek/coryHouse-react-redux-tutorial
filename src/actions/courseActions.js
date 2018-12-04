import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

//xxx this is very important, because in courseReducers.js ...
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export const createCourseSuccess = (course) => {
  return { type: types.CREATE_COURSE_SUCCESS, course: course};
};

export const updateCourseSuccess = (course) => {
  return { type: types.UPDATE_COURSE_SUCCESS, course: course};
};

//thunk -> returns function
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    //this is thunk
    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(error => {
      throw(error);
    });
  };
}

//thunk -> returns function
export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    //this is thunk
    return courseApi.saveCourse(course)
    .then(savedCourse => {
      //id passed - update course
      //id not passed - create new course
      course.id
      ? dispatch(updateCourseSuccess(savedCourse))
      : dispatch(createCourseSuccess(savedCourse));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
