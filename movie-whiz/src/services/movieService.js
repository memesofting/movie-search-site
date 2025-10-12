import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

async function fetchMovies(query) {
    return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export default fetchMovies;


