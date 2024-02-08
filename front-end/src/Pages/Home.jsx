import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
                <h2>Welcome to FilmHunters</h2>
            <p>Discover and explore your favorite movies!</p>
            <div>
                <Link to="/movies">Explore Movies</Link>
            </div>
        </div>
    );
};

export default Home;
