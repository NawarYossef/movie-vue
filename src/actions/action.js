import axios from 'axios';
import history from '../history';

// -------------- GET all movies --------------------
export const GET_NEW_MOVIES_SUCCESS = 'GET_NEW_MOVIES_SUCCESS';
export const getNewMoviesSuccess = movies => ({
  type: GET_NEW_MOVIES_SUCCESS,
  movies
});

export const getMovies = (url, pageCounter) => {
  return dispatch => {
    axios.get(url + pageCounter)
      .then(res => {
        return res.data;
      })
      .then(data => {
        dispatch(getNewMoviesSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

// -------------- Render more movies --------------------
export const RENDER_MORE_MOVIES_SUCCESS = 'RENDER_MORE_MOVIES_SUCCESS';
export const renderMoreMoviesSuccess = movies => ({
  type: RENDER_MORE_MOVIES_SUCCESS,
  movies
});

export const RenderMoreMovies = (url) => {
  return dispatch => {
    axios.get(url)
      .then(res => {
        return res.data;
      })
      .then(data => {
        dispatch(renderMoreMoviesSuccess(data));
      })
      .catch(err => console.log(err));
  };
};

// -------------- Store movie data and movie ID --------------------
export const STORE_MOVIE_DATA_AND_ID = 'STORE_MOVIE_DATA_AND_ID';
export const storeMovieDataAndId = (movie, movieId) => {
  return {
    type: STORE_MOVIE_DATA_AND_ID,
    movie,
    movieId
  }
}

// -------------- GET movie Credits --------------------
export const GET_MOVIE_CREDITS_SUCCESS = 'GET_MOVIE_CREDITS_SUCCESS';
export const getMovieCreditsSuccess = (creditsData) => ({
  type: GET_MOVIE_CREDITS_SUCCESS,
  creditsData
});


export const getMovieCredits = movieId => {
  return dispatch => {
    const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
    axios.get(movieCreditsUrl)
      .then(res => {
        return res.data
      })
      .then(creditsData => {
        dispatch(getMovieCreditsSuccess(creditsData));
        history.push('/movies/movie-details');
      })
      .catch(err => console.log(err));
  }
}

// -------------- Find movie Trailer Key and show modal--------------------
export const GET_TRAILER_KEY_AND_SHOW_MODAL_SUCCESS = 'GET_TRAILER_KEY_AND_SHOW_MODAL_SUCCESS';
export const getTrailerKeyAndShowModalSuccess = (trailerKey) => ({
  type: GET_TRAILER_KEY_AND_SHOW_MODAL_SUCCESS,
  trailerKey
});

const findOfficialTrailer = (videosDataArray) => {
  const officialTrailers = videosDataArray.filter(video => {
    return video.name.toLowerCase().split(" ").includes("official") && video.name.toLowerCase().split(" ").includes("trailer");
  })
  return officialTrailers.length ? officialTrailers[0].key : '';
}

export const getTrailerKeyAndShowModal = (movieId) => {
  return dispatch => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
    axios.get(movieUrl)
      .then(res => {
        return findOfficialTrailer(res.data.videos.results);
      })
      .then(trailerKey => {
        dispatch(getTrailerKeyAndShowModalSuccess(trailerKey));
      })
      .catch(err => console.log(err));
  }
}

// -------------- Close modal --------------------
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER
  }
}