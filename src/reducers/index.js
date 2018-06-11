import { combineReducers } from 'redux';
import movies from './moviesReducer';

// add additional reducers here
const rootReducer = combineReducers({
  movies
});

export default rootReducer;
