// -------------- GET movies --------------------
export const GET_NEW_MOVIES_SUCCESS = 'GET_NEW_MOVIES_SUCCESS';
export const getNewMoviesSuccess = movies => ({
  type: GET_NEW_MOVIES_SUCCESS,
  movies
});

export const getMovies = (url, pageNumber) => {
  return dispatch => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(getNewMoviesSuccess(data));
      })
      .catch(err => console.log(err));
  };
};
