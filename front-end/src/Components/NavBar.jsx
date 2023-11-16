import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div> 
        <nav>
        <h6 style={{color: "white", height: "0px", padding: "1px"}}>
           🍿 Search for Movies by Google 🍿
          </h6>
    <form action="https://www.google.com/search" method="GET">
      <input type="text" name="q" placeholder="Google Search"/>
      <input type="submit" value="Google Search"/>
    </form> 
            <Link to="/movies">Movies</Link>
            <Link to="/movies/new">New Movie</Link>
        </nav>
        </div>
    );
};

export default NavBar;
