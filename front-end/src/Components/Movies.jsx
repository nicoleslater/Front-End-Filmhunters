import { useState, useEffect } from "react";
import Movie from "../Components/Movie";

const API = import.meta.env.VITE_API_URL;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setMovies(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div> 
    <div className="Movies">
      <section>
      
        <div>
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
         </div>

      </section>
    </div>
    </div>
  );
}

export default Movies;
