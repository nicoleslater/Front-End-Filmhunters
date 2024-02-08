import React, { useState } from 'react';
import styled from 'styled-components';

const API = import.meta.env.VITE_API_URL;


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MovieItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const AddToFavoritesButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const Home = () => {
const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    try{
        const response = await fetch(`${API}/search?query=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.results);
    } catch(error){
        console.error('Error searching for movies:', error);
    }
  };

  const addToFavorites = (movieId) => {
    if(!favorites.some((movie) => movie.id === movieId)) {
        const movieToAdd = searchResults.find((movie) => movie.id === movieId);
        setFavorites([...favorites, movieToAdd]);
    }
  }

 return (
    <Container>
      <h1>Movie Website</h1>
      <SearchInput
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList>
        {searchResults.map((movie) => {
          <MovieItem key={movie.id}>
            {movie.title}
            <AddToFavoritesButton onClick={() => addToFavorites(movie.id)}>
              Add to Favorites
            </AddToFavoritesButton>
          </MovieItem>
        })}
      </MovieList>
    </Container>
  );
};



export default Home;
