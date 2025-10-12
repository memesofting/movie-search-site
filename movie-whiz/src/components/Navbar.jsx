import Search from "./Search";
import { useState } from "react";

function Navbar({setMovies}) {
    return ( <>
    <nav className="bg-blue-950 flex">
        <h1 className="text-3xl text-white m-5">MovieWhiz</h1>
        <Search setMovies={setMovies} />
    </nav>
    </> );
}

export default Navbar;