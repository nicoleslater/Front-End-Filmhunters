import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function MovieEditForm() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [ movie, setMovie ] = useState({
        title: "",
        released: "",
        director: "",
        genre: "",
        rated: 0,
        dvd: false,
        imdb_Ratings: 0
    });

    const handleTextChange = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setMovie({ ...movie, dvd: !movie.dvd });
    }

    const updateMovie = () => {
        console.log(`${API}/movies${id}`);

        fetch(`${API}/movies/${id}`, {
            method: "PUT",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            navigate(`/movies/${id}`)
        })
        .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((responseJSON) => {
            setMovie(responseJSON);
        })
        .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMovie();
    };


  return (
    <div className="Edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
          id="title"
          value={movie.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Movie"
          required
        />
         <label htmlFor="released">Released Date:</label>
            <input
          id="released"
          value={movie.released}
          type="text"
          onChange={handleTextChange}
          placeholder="Date of Released"
          required
        />
         <label htmlFor="director">Director:</label>
            <input
          id="director"
          value={movie.director}
          type="text"
          onChange={handleTextChange}
          placeholder="Director of the Movie"
          required
        />
         <label htmlFor="genre">Genre:</label>
            <input
          id="genre"
          value={movie.genre}
          type="text"
          onChange={handleTextChange}
          placeholder="Genre of the Movie"
          required
        />
         <label htmlFor="rated">Rated:</label>
            <input
          id="rated"
          value={movie.rated}
          type="text"
          onChange={handleTextChange}
          placeholder="Rated..."
          required
        />
         <label htmlFor="dvd">DVD?:</label>
            <input
          id="dvd"
          value={movie.dvd}
          type="text"
          onChange={handleCheckboxChange}
          placeholder="DVD Released?"
          required
        />
         <label htmlFor="imdb_Ratings">imdb_Ratings:</label>
            <input
          id="imdb_Ratings"
          value={movie.imdb_Ratings}
          type="number"
          onChange={handleTextChange}
          placeholder="imdb_Ratings..."
          required
        />
        </form>
      
    </div>
  )
}

export default MovieEditForm;
