import * as actions from '../actions/action';

const initialState = {
  allMovies: {},
  singleMovie: {},
  pageCounter: 1,
  movieId: '',
  movieVideoKey: '',
  showMovieDetails: false,
  movieData: '',
  movieCreditsData: {}
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case actions.GET_NEW_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.movies
      }
    default:
      return state;
  }
}

