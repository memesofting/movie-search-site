function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
        return <p className="text-center text-gray-500 mt-5">No movies found.</p>;
    }
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt="movie poster" />
                    <h2>
                        {movie.Title}
                    </h2>
                </li>
            ))}
        </ul>
    );

}

export default MovieList;