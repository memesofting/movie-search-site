import { useState } from "react";

import Footer from "./Footer";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import Search from "./Search";

function HomePage() {
    const [movies, setMovies] = useState([]);
    console.log("Movies in HomePage:", movies);

    return (
    <div className="flex flex-col min-h-screen">
        <Navbar setMovies={setMovies} />
        <main className="flex-grow">
            <MovieList movies={movies} />
        </main>
        <Footer />
    </div>
    );
}

export default HomePage;