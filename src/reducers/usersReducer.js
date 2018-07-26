import * as serverActions from '../actions/users';

const initialState = {
  token: ''
};

export default function Users(state = initialState, action) {
  switch (action.type) {
    case apiActions.STORE_MOVIE_DATA_AND_ID:
      return {
        ...state,
        movieId: action.movieId,
        movieData: action.movie
      }
    case apiActions.GET_NEW_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.movies
      }
    case apiActions.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        showMovieDetails: !state.showMovieDetails,
        movieCreditsData: action.creditsData
      }
    case apiActions.GET_TRAILER_KEY_AND_SHOW_MODAL_SUCCESS:
      return {
        ...state,
        trailerKey: action.trailerKey,
        showModal: true
      }
    case apiActions.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    case apiActions.INCREASE_COUNTER:
      return {
        ...state,
        pageCounter: state.pageCounter + 1
      }
    case serverActions.STORE_BOOKMARK_COUNT:
      return {
        ...state,
        bookmarkCount: action.count
      }
    case serverActions.STORE_MOVIES_DATA_SUCCESS:
      return {
        ...state,
        bookmarkedMovies: action.moviesData
      }
    default:
      return state;
  }
}

