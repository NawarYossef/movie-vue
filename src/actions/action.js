// -------------- GET new movies --------------------
export const GET_NEW_MOVIES_SUCCESS = 'GET_NEW_MOVIES_SUCCESS';
export const getNewMoviesSuccess = movies => ({
  type: GET_NEW_MOVIES_SUCCESS,
  movies
});

export const getNewMovies = (pageNumber) => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/4/discover/movie?primary_release_date.gte=2018-4-7&page=1&api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("here's our movies", data);
        
        dispatch(getNewMoviesSuccess(data));
      })
      .catch(err => console.log(err));
  };
};
