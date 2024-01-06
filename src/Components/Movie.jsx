import React from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <tr>
      <td>
        {movie.is_favorite ? (
          <span role="img" aria-label="Favorite">
            🍿
          </span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a
          href={movie.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {movie.title}
        </a>
      </td>
      <td>
        <Link to={`/movies/${movie.id}`}>
          <span role="img" aria-label="Movie">
            🎥
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default Movie;
