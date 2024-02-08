import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/movies" className="navbar-link">Search Movies</Link>
                <Link to="/movies/new" className="quick-link">Add Movie</Link>
            </div>
            <div className="search-section">
                <h6 className="search-header">
                    🍿 Search Movies by Google 🍿
                </h6>
                <form action="https://www.google.com/search" method="GET" className="search-form">
                    <input type="text" name="q" placeholder="Search for movies on Google" className="search-input"/>
                    <input type="submit" value="Google Search" className="search-button"/>
                </form> 
            </div>
        </nav>
    );
};

export default NavBar;
