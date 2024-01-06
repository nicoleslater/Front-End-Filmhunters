import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div>
      <div class="navbar">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/movies/new">New Movie</a>
        <a href="/favorites">Create Favorite</a>
        <form 
        className="googleSearchBar" 
        action="https://www.google.com/search" 
        method="GET"
        target="_blank">
          <input type="text" name="q" placeholder="Google Search" />
          <input className="googleSearchBarButton" type="submit" value="Google Search" />
        </form>
      </div>
     
    </div>
  );
};

export default NavBar;
