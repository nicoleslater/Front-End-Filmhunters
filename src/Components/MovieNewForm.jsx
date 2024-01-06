import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function MovieNewForm() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    url: "",
    released: "",
    director: "",
    genre: "",
    rated: "",
    is_favorite: false,
    imdb_Ratings: "",
  });

  const addMovie = () => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/movies`);
      })
      .catch((error) => console.error("Error adding movie:", error));
  };

  const handleTextChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setMovie({ ...movie, is_favorite: !movie.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          value={movie.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <input
          id="genre"
          type="text"
          name="genre"
          required
          value={movie.genre}
          placeholder="Genre (Action, RomCom...)"
          onChange={handleTextChange}
        />
        <input 
          id="director"
          type="text"
          name="director"
          required
          value={movie.director}
          placeholder="Director"
          onChange={handleTextChange}
        />

        <input
          id="rated"
          type="text"
          name="rated"
          required
          value={movie.rated}
          placeholder="Rated (E, PG13...)"
          onChange={handleTextChange}
        />
        
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={movie.url}
          placeholder="http://..."
          onChange={handleTextChange}
        />
       
        <label htmlFor="imdb_Ratings">IMDb Rating:</label>
        <input 
          id="imdb_Ratings"
          type="number"
          placeholder="5, 6.7..."
          value={movie.imdb_Ratings}
          onChange={handleTextChange}
        />
        <labe htmlFor="released">Released:</labe>
        <input
          id="released"
          type="date"
          required 
          name="releaseDate"
          value={movie.released}
          placeholder="MM/DD/YYYY"
          onChange={handleTextChange}
        />
         <label htmlFor="is_favorite">Favorite?</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={movie.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MovieNewForm;
