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
    
  return (
    <div>
      
    </div>
  )
}
import { Form } from 'react-router-dom';

export default MovieEditForm;
