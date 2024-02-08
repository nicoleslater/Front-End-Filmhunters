import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Favorites from './Favorites';

const API = import.meta.env.VITE_API_URL;

function MovieDetails() {
    const [ movie, setMovie ] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setMovie(responseJSON)
        })
        .catch(error => console.log(error))
    }, [id, API])

    const deleteMovie = () => {
        const httpOptions = { method: "DELETE" }
        fetch(`${API}/movies/${id}`, httpOptions)
        .then(() => navigate(`/movies`))
        .catch(error => console.log(error))
    }

     const handleDelete = () => {
        deleteMovie();
    }


  return (
    <div className="showNavigation">
            <div>
                <Link to={`/movies`}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/movies/${id}`}>
                    <button>Movie</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <h3>{movie.director}</h3>
                <h4>{movie.genre}</h4>
                <h2>{movie.rated}</h2>
            </div>
            <div>
                <Favorites />
            </div>
        </div>
  )
}

export default MovieDetails;
