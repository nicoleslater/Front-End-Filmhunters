import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Favorites from './Favorites';
import styled from 'styled-components';

const API = import.meta.env.VITE_API_URL;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
`;

const BackButton = styled.button`
    margin-right: 10px;
`;

const MovieTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Director = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Genre = styled.h4`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Rated = styled.h2`
    font-size: 24px;
`;

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/movies/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => {
                setMovie(responseJSON);
            })
            .catch((error) => console.log(error));
    }, [id, API]);

    const deleteMovie = () => {
        const httpOptions = { method: 'DELETE' };
        fetch(`${API}/movies/${id}`, httpOptions)
            .then(() => navigate(`/movies`))
            .catch((error) => console.log(error));
    };

    const handleDelete = () => {
        deleteMovie();
    };

    return (
        <Container>
            <ButtonContainer>
                <Link to="/movies">
                    <BackButton>Back</BackButton>
                </Link>
                <Link to={`/movies/${id}`}>
                    <button>Movie</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </ButtonContainer>
            <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <Description>{movie.description}</Description>
                <Director>{movie.director}</Director>
                <Genre>{movie.genre}</Genre>
                <Rated>{movie.rated}</Rated>
            </div>
            <div>
                <Favorites />
            </div>
        </Container>
    );
}

export default MovieDetails;