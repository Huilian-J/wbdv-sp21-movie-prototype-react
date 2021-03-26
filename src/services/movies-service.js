const API_KEY = "a17b23da55290facfec6182186abc701"
const MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=a17b23da55290facfec6182186abc701"

export const findTopRated = () =>
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a17b23da55290facfec6182186abc701`)
        .then(response => response.json())

export const findMovieById = (mid) =>
    fetch(`https://api.themoviedb.org/3/movie/${mid}?api_key=a17b23da55290facfec6182186abc701`)
        .then(response => response.json())

export default {
    findTopRated,
    findMovieById
}
