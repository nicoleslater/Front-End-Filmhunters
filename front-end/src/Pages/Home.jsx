import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to FILMHUNTERS!</h1>
            <p>Explore the world of cinema like never before.</p>
            <div className="cta-buttons">
                <Link to="/movies" className="btn btn-primary">Browse Movies</Link>
                <Link to="/favorites" className="btn btn-secondary">Explore Favorites</Link>
            </div>
        </div>
    );
};

export default Home;
