import { useState } from "react";
import fetchMovies from "../services/movieService";
import MovieList from "./MovieList";

function Search({ setMovies }) {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await fetchMovies(query);
    console.log("Fetched data:", data);
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
    </div>
  );
}

export default Search;
