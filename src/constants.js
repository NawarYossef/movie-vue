const movieApiData = {
  nowPlaying: {
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`,
    route: '/movies/now-playing'
  },
  comingSoon: {
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`,
    route: '/movies/coming-soon'
  },
  popular: {
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`,
    route: '/movies/popular'
  },
}