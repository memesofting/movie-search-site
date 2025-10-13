import Search from "./Search";
import { useState } from "react";

function Navbar({ setMovies }) {
    return (<>
        <nav className="bg-blue-950 flex">
            <h1 className="text-3xl text-white m-5">MovieWhiz</h1>
            <div className="ml-auto mr-5">
                <Search setMovies={setMovies} />
            </div>
        </nav>
    </>);
}

export default Navbar;