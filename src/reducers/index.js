import { combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
