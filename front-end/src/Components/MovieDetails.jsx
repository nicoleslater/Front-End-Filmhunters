import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FavoriteForm from "../Components/FavoriteForm";
import styled from "styled-components";

const API = import.meta.env.VITE_API_URL;


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 10px solid #1a1a1a;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
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

const Director = styled.h4`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Genre = styled.h4`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Rated = styled.h4`
    font-size: 20px;
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
        <CardContainer>
            <ButtonContainer>
                <Link to="/movies">
                    <BackButton>Back to Movies</BackButton>
                </Link>
                <button onClick={handleDelete}>Delete Movie</button>
            </ButtonContainer>
            <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <Description>{movie.description}</Description>
                <Director>{movie.director}</Director>
                <Genre>{movie.genre}</Genre>
                <Rated>{movie.rated}</Rated>
            </div>
            <div>
                <FavoriteForm />
            </div>
        </CardContainer>
    );
}

export default MovieDetails;