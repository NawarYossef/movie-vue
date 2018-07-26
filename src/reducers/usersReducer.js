import * as actions from '../actions/users';

const initialState = {
  token: '',
  loggedIn: false
};

export default function Users(state = initialState, action) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.token,
        loggedIn: true
      }
    case actions.LOG_OUT:
      return {
        ...state,
        token: '',
        loggedIn: false
      }
    default:
      return state;
  }
}

