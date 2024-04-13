function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-center items-center">
                <h1 className="text-white text-2xl font-bold transition-colors duration-300 hover:text-blue-500">Weather App</h1>
            </div>
        </nav>
    );
}

export default Navbar;


