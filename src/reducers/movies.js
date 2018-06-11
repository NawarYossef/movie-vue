import * as actions from '../actions/action';

const initialState = {
  allMovies: {},
  popularMovies: [],
  inTheaters: [],
  singleMovie: {},
  paginationCounter: 1
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

