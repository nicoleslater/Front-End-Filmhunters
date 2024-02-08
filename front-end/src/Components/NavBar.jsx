import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/movies" className="navbar-link">Movie List</Link>
                <Link to="/movies/:id/favorites" className="navbar-link">Favorites</Link>
            </div>
            <div className="search-section">
                <h6 className="search-header">
                    🍿 Search for Movies by Google 🍿
                </h6>
                <form action="https://www.google.com/search" method="GET" className="search-form">
                    <input type="text" name="q" placeholder="Search for movies on Google" className="search-input"/>
                    <input type="submit" value="Google Search" className="search-button"/>
                </form> 
            </div>
            <div className="quick-links">
                <Link to="/movies/new" className="quick-link">New Movie</Link>
            </div>
        </nav>
    );
};

export default NavBar;
