import { useState } from "react";
import fetchMovies from "../services/movieService";
import MovieList from "./MovieList";

function Search({ setMovies }) {
  const [query, setQuery] = useState("");

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
        className="bg-gray-300 ml-auto m-5 md:min-w-100 p-2 rounded-2xl"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button className="bg-blue-500 p-2.5 rounded-2xl cursor-pointer hover:bg-blue-300 transition duration-200" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
