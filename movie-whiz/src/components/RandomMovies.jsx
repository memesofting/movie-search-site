import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchMovies from "../services/movieService";

function RandomMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getRandomMovies() {
            setIsLoading(true);
            const randomKeywords = ['god', 'love', 'gold', 'me', 'lord', 'star', 'food', 'money', 'will'];
            const randomQuery = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
            const randomMovies = await fetchMovies(randomQuery)
            setMovies(randomMovies);
            setIsLoading(false);
        }
        getRandomMovies();
    }, []);

    if (isLoading) {
        return (
            <p className="text-center mt-10">Loading movies ...
            </p>
        );
    }
    return (
        <>
            <h2 className="p-3 text-blue-900 bg-blue-400">Movies</h2>
            <ul className="flex flex-row flex-wrap justify-center pt-5 pb-5 bg-gray-100">
                {movies.map((movie) => (
                    <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                        <li key={movie.imdbID} className="p-2 w-50 hover:scale-105 transition duration-550 ease-in-out cursor-pointer">
                            <img src={movie.Poster} alt="movie poster" />
                            <h3 className="font-bold">
                                {movie.Title}
                            </h3>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}

export default RandomMovies;