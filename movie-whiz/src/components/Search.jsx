import { useState } from "react";
import fetchMovies from "../services/movieService";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await fetchMovies(query);
    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
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

      {movies.map((movie) => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </div>
  );
}

export default Search;
