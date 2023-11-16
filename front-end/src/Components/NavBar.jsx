import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
            <img className="logoImage"
                src="../src/assets/archlogo.jpg"></img>
            <Link to="/movies">Movies</Link>
            <Link to="/movies/new">New Movie</Link>
        </nav>
    );
};

export default NavBar;
