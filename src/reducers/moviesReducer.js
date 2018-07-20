import * as actions from '../actions/action';
import * as apiActions from '../actions/api';

const initialState = {
  allMovies: {},
  singleMovie: {},
  pageCounter: 1,
  movieId: '',
  trailerKey: '',
  showModal: false,
  showMovieDetails: false,
  movieData: {},
  movieCreditsData: {}
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case actions.STORE_MOVIE_DATA_AND_ID:
      return {
        ...state,
        movieId: action.movieId,
        movieData: action.movie
      }
    case actions.GET_NEW_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.movies
      }
    case actions.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        showMovieDetails: !state.showMovieDetails,
        movieCreditsData: action.creditsData
      }
    case actions.GET_TRAILER_KEY_AND_SHOW_MODAL_SUCCESS:
      return {
        ...state,
        trailerKey: action.trailerKey,
        showModal: true
      }
    case actions.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    case actions.INCREASE_COUNTER:
      return {
        ...state,
        pageCounter: state.pageCounter + 1
      }
    default:
      return state;
  }
}

