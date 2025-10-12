import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

async function fetchMovies(query) {
    try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = response.data;

        if (data.Response === "True") {
            console.log("Movies found:", data.Search);
            return data.Search;
        } else {
            console.warn("No movies found:", data.Error);
            return [];
        }
    } catch (error) {
        console.error("API call failed:", error);
        return [];
    }
}

export default fetchMovies;