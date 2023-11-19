import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const API = import.meta.env.VITE_BASE_URL;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/movies`);
        console.log(`${API}/movies`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseJSON = await response.json();
        console.log(responseJSON);
        setMovies(responseJSON.data.payload);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Movies">
      <h1>MOVIE LIST</h1>
      <section>
        <table>
          <tbody>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Movies;
