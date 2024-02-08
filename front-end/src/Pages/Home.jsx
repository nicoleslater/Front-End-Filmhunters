import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="home-container">
            <h2 className="home-heading">Welcome to FilmHunters</h2>
            <p className="home-text">Discover and explore your favorite movies!</p>
            <div>
                <Link to="/movies" className="explore-link">Explore Movies</Link>
            </div>
        </div>
    );
};

export default Home;
