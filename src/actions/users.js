import { API_BASE_URL } from "../config";
import history from '../history'
import axios from 'axios';
import store from '../store';

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type: SET_TOKEN,
  token
})

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
  type: LOG_OUT
});


const setSessionToken = (token) => {
  store.set('sessionToken', { token });
}

const getToken = () => {
  console.log('getting');
  let token = store.get('sessionToken');
  return token;
}

const removeToken = () => {
  store.remove('sessionToken')
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
    .then(response => {
      console.log(response);
    })
    .then(() => {
      dispatch(userLogin(userData));
    })
    .catch(err => {
      console.log(err);
    });
}

export const userLogin = data => dispatch => {
  fetch(API_BASE_URL + '/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(payload => {
      history.push('');
      setSessionToken(payload.token);
    })
    .then(() => {
      let token = getToken();
      dispatch(setToken(token.token));
    })
    .catch(err => {
      console.log(err)
    });
}