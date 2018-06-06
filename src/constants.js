export const movieURL = (API_KEY) => {
    return `https://api.themoviedb.org/4/discover/movie?primary_release_date.gte=2018-4-7&page=1&api_key=${API_KEY}&language=en-US`
}