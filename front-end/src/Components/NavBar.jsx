import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h1>
                <Link to="/movies">Movies</Link>
            </h1>
            <button>
                <Link to="/movies/new">New Movie</Link>
            </button>
        </nav>
    );
};

export default NavBar;
