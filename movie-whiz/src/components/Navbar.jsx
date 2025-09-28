function Navbar() {
    return ( <>
    <nav className="bg-blue-950 flex">
        <h1 className="text-3xl text-white m-5">MovieWhiz</h1>
        <input type="text" placeholder="search movie" className="bg-gray-300 ml-auto m-5 max-w-400 p-2"/>
    </nav>
    </> );
}

export default Navbar;