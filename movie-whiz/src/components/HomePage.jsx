import { useState } from "react";

import Footer from "./Footer";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Search from "./Search";

function HomePage() {
    const [movies, setMovies] = useState([]);
    console.log("Movies in HomePage:", movies);

    return (<>
        <Navbar setMovies={setMovies} />
        <MovieList movies={movies} />
        <Footer />
    </>);
}

export default HomePage;