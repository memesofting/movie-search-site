import { Link } from "react-router-dom";

function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
        return (
            <>
            <h2 className="m-5 text-blue-900">Search result</h2>
                <p className="text-center text-gray-500 mt-5">No movies found.
                </p>
            </>
        );
    }
    return (
        <>
            <h2 className="m-5 text-blue-900">Search result</h2>
            <ul className="flex flex-row flex-wrap justify-center mt-5">
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

export default MovieList;