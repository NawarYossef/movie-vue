import { API_BASE_URL } from "../config";
import history from '../history'

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type: SET_TOKEN,
  token
})

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
  type: LOG_OUT
});

const setSessionToken = token => {
  localStorage.setItem("token", token);
}

export const getToken = () => {
  let token = localStorage.getItem("token");
  return token;
}

const removeToken = () => {
  localStorage.removeItem("token");
}

export const userLogout = () => dispatch => {
  removeToken();
  dispatch(logOut());
}

export const createNewUser = userData => dispatch => {
  const url = API_BASE_URL + '/api/users/signup';
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      history.push('/login');
      return;
    })
    .catch(err => {
      console.log(err);
    });
}

export const userLogin = userData => dispatch => {
  const url = API_BASE_URL + '/api/auth/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(payload => {
      setSessionToken(payload.authToken);
    })
    .then(() => {
      let token = getToken();
      dispatch(setToken(token));
      history.push('/movies/coming-soon');
      return;
    })
    .catch(err => {
      console.log(err)
    });
}