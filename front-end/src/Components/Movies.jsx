import { useState, useEffect } from "react";
import Movie from "./Movie";

const API = import.meta.env.VITE_API_URL;

function Movies() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
fetch(`${API}/movies`)
.then(response => response.json())
.then((responseJSON) => {
  console.log(responseJSON);
  setMovies(responseJSON.data.payload);
})
.catch((error) => {
  console.log(error);
})
}, []);

  return (
    <div className="Movies">
      <section>
        <table>
            <tbody>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Movies;
