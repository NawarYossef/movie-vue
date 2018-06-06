import * as actions from '../actions/action';

const initialState = {
  newMovies: [],
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
        newMovies: action.movies
      }
    default:
      return state;
  }
}

