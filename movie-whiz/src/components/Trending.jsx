import astronaut from "../assets/astronaut.jpg"
import { useState } from "react";
import fetchMovies from "../services/movieService";

function Trending() {
    return (
        <>
        <div className="w-50">
            <h2>Trending movie</h2>
            <h3>Title</h3>
            <img src={astronaut} alt="" className="w-50" />
        </div>
        </>
    );
}

export default Trending;