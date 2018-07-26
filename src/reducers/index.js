import { combineReducers } from 'redux';
import movies from './moviesReducer';
import users from './usersReducer';

// add additional reducers here
const rootReducer = combineReducers({
  movies,
  users
});

export default rootReducer;
