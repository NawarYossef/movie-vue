import axios from 'axios';
import { API_BASE_URL } from '../config';

// -------------- GET all movies data --------------------
export const getMovieData = () => {
  return dispatch => {
    axios.get(`${API_BASE_URL}/api/movies`)
      .then(res => {
        dispatch(storeMovieDataSuccess(res.data));
        dispatch(storeBookmarkCount(res.data.length));
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
    console.log('------------------------------------');
    console.log(movieId, movieUrl);
    console.log('------------------------------------');
    axios.get(movieUrl)

      .then(res => {
        const movieData = res.data
        axios.post(`${API_BASE_URL}/api/movies`, {
          movieData
        })
          .then(res => {
            dispatch(storeBookmarkCount(res.data.length));
            dispatch(storeMovieDataSuccess(res.data));
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
    axios.delete(`${API_BASE_URL}/api/movies/${movieId}`)
      .then(() => {
        dispatch(getMovieData(movieId));
        return;
      })
      .catch(err => console.log(err));
  };
};

 
//  rating endpoint
//  allow users to bookmark from movie details page
//  if movie is bookmarked:
  //  when user going to movie details page, they should see trash icon instead of bookmark
  //  don't allow for movies to be added twice (show message for that)
// design :
  // fix bookmark circle