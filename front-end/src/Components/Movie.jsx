function Movie({ movie }){


 
  return(
    <div>
      <section>
          <h5>{movie.title}</h5>
          <p>{movie.released}</p>
          <p>{movie.director}</p>
          <p>{movie.genre}</p>
          <p>{movie.rated}</p>
          <p>{movie.dvd}</p>
          <p>{movie.imdb_Ratings}</p>
          </section>
         </div>
  )
}



export default Movie;