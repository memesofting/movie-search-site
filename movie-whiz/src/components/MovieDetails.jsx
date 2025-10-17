import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/movieService";
import Footer from "./Footer";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function loadMovie() {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        }
        loadMovie();
    }, [id]);

    if (!movie) {
        return <p className="text-center mt-10">Loading movie details...</p>;
    }

    return (
        <div className="flex flex-col min-h-screen"> 
            <nav className="bg-blue-950 flex">
                <h1 className="text-3xl text-white m-5">MovieWhiz</h1>
            </nav>
            <div className="flex-grow max-w-4xl mx-auto p-6">

                <div className="flex flex-col md:flex-row gap-8">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="rounded-xl w-full md:w-1/3"
                    />
                    <div>
                        <h1 className="text-blue-950 text-3xl font-bold mb-2">{movie.Title}</h1>
                        <p className="text-gray-500 mb-2">
                            {movie.Year} • {movie.Runtime}
                        </p>
                        <p className="mb-2 text-sm text-blue-950">
                            <strong>Genre:</strong> {movie.Genre}
                        </p>
                        <p className="mb-2 text-sm text-blue-950">
                            <strong>Director:</strong> {movie.Director}
                        </p>
                        <p className="mb-2 text-sm text-blue-950">
                            <strong>Actors:</strong> {movie.Actors}
                        </p>
                        <p className="mt-4 text-blue-950 leading-relaxed">{movie.Plot}</p>
                        <Link to="/">
                            <button className="bg-red-500 w-20 p-3 mt-5 rounded-xl text-white cursor-pointer">
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MovieDetails;
