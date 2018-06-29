const CURRENT_DATE = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('T')[0];

export const MOVIES_DATA = {
  nowPlaying: {
    title: 'Now Playing',
    apiUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`,
    route: '/movies/now-playing'
  },
  comingSoon: {
    title: 'Coming Soon',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&language=en-US&primary_release_date.gte=${CURRENT_DATE  }&page=`,
    route: '/movies/coming-soon'
  },
  popular: {
    title: 'Popular',
    apiUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=`,
    route: '/movies/popular'
  },
}

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';