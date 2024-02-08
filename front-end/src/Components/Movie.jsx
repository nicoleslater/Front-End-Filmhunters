import { Link } from "react-router-dom";
import React from "react";



function Movie({ movie }){


 
  return(
    <div>
     <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{movie.title}</h2>
          <p>{movie.released}</p>
          <p>{movie.director}</p>
          <p>{movie.genre}</p>
          <p>{movie.rated}</p>
          <p>{movie.dvd}</p>
          <p>{movie.imdb_Ratings}</p>
    <div className="card-actions justify-end">
    <div>
          <Link to={`/movies/${movie.id}`}>🍿</Link>
          </div>
    </div>
  </div>
</div>
         </div>
  )
}



export default Movie;