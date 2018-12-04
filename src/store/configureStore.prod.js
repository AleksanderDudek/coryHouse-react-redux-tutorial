import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
//thunk serves async calls to store
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
