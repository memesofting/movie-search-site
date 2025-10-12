import { useState } from "react";
import fetchMovies from "../services/movieService";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await fetchMovies(query);
    setMovies(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movies.Poster} alt="movie poster" />
            <h2>
              {movie.Title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
