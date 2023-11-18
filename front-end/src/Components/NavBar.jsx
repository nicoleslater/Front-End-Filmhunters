import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div>
      <div class="navbar">
        <a href="../front-end/src/Pages/Home.jsx">Home</a>
        <a href="../front-end/src/Pages/Index.jsx">Movie List</a>
        <a href="../Movies.jsx">Movies</a>
        <a href="../front-end/src/Pages/New.jsx">New Movie</a>
        <a href="../Favorite.jsx">Create Favorite</a>
        <form className="googleSearchBar" action="https://www.google.com/search" method="GET">
          <input type="text" name="q" placeholder="Google Search" />
          <input className="googleSearchBarButton" type="submit" value="Google Search" />
        </form>
      </div>
     
    </div>
  );
};

export default NavBar;
