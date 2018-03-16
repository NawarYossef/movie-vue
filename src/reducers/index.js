import { combineReducers } from 'redux';
import complimentsReducer from './complimentsReducer';
import usersReducer from './usersReducer';

// add additional reducers here
const rootReducer = combineReducers({
  complimentsReducer,
  usersReducer
});

export default rootReducer;
