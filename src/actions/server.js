import axios from 'axios';
import { API_BASE_URL } from '../config';

// -------------- GET all movies data --------------------
export const getMovieData = () => {
  return dispatch => {
    fetch(`${API_BASE_URL}/api/movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(storeMovieDataSuccess(data));
        dispatch(storeBookmarkCount(data.length));
        return;
      })
      .catch(err => console.log(err));
  };
};

// -------------- Store bookmarked movie --------------------
export const STORE_MOVIES_DATA_SUCCESS = 'STORE_MOVIES_DATA_SUCCESS';
export const storeMovieDataSuccess = moviesData => ({
  type: STORE_MOVIES_DATA_SUCCESS,
  moviesData
});

export const storeMovieDataAndUpdateBookmarkCount = movieId => {
  return dispatch => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
    axios.get(movieUrl)

      .then(res => {
        const movieData = { "movieData": res.data }

        fetch(`${API_BASE_URL}/api/movies`, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json; charset=utf-8",
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(movieData)
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            dispatch(storeBookmarkCount(data.length));
            dispatch(storeMovieDataSuccess(data));
            return;
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
}

// --------------Store bookmark Count ---------
export const STORE_BOOKMARK_COUNT = "STORE_BOOKMARK_COUNT";
export const storeBookmarkCount = count => {
  return {
    type: STORE_BOOKMARK_COUNT,
    count
  }
}

// -------------- DELETE movie data --------------------
export const DELETE_MOVIES_DATA_SUCCESS = 'DELETE_MOVIES_DATA_SUCCESS';
export const deleteMovieDataSuccess = moviesId => ({
  type: DELETE_MOVIES_DATA_SUCCESS,
  moviesId
});

export const deleteBookmarkedMovie = movieId => {
  return dispatch => {
    fetch(`${API_BASE_URL}/api/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json; charset=utf-8",
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(() => {
        dispatch(getMovieData(movieId));
        return;
      })
      .catch(err => console.log(err));
  };
};