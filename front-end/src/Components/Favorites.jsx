import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Favorite from "./Favorite";
import FavoriteForm from "./FavoriteForm";

const API = import.meta.env.VITE_API_URL;

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/movies/${id}/favorites`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setFavorites(responseJSON.allFavorites);
      })
      .catch((error) => console.log(error));
  }, [id, API]);

  const handleAdd = (newFavorite) => {
    fetch(`${API}/movies/${id}/favorites`, {
      method: "POST",
      body: JSON.stringify(newFavorite),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setFavorites([...reviews, responseJSON]);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (favoriteId) => {
    fetch(`${API}/movies/${id}/favorites/${favoriteId}`, { method: "DELETE" })
      .then((response) => {
        const copyFavoriteArray = [...favorites];
        const indexDeletedFavorite = copyFavoriteArray.findIndex(
          (favorite) => favorite.id === favoriteId
        );
        console.log(favoriteId, indexDeletedFavorite);
        copyFavoriteArray.splice(indexDeletedFavorite, 1);
        console.log("New Favorites", copyFavoriteArray);
        setFavorites(copyFavoriteArray);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (updatedFavorite) => {
    fetch(`${API}/movies/${id}/favorites/${updatedFavorite.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedFavorite),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then(responseJSON => {
        const copyFavoriteArray = [...favorites]
        const indexUpdatedFavorite = copyFavoriteArray.findIndex(favorite => {
            return favorite.id === updatedFavorite.id
        })
        copyFavoriteArray[indexUpdatedFavorite] = responseJSON
        setFavorites(copyFavoriteArray)
    });
  };

  return (
    <section className="Favorites">
      <h2>Favorites</h2>
      <FavoriteForm handleSubmit={handleAdd}>
        <h3>Add a New Favorite</h3>
      </FavoriteForm>
      {favorites.map((favorite) => (
        <Favorite key={favorite.id} favorite={favorite} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </section>
  );
}

export default Favorites;
