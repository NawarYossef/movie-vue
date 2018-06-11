export const MOVIES_DATA = {
  nowPlaying: {
    title: 'Now Playing',
    apiUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    route: '/movies/now-playing'
  },
  comingSoon: {
    title: 'Coming Soon',
    apiUrl: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    route: '/movies/coming-soon'
  },
  popular: {
    title: 'Popular',
    apiUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    route: '/movies/popular'
  },
}

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';