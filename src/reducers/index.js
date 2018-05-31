import { combineReducers } from 'redux';
import movies from './movies';

// add additional reducers here
const rootReducer = combineReducers({
  movies
});

export default rootReducer;
