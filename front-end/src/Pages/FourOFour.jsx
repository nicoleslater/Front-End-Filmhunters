import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
`;

const Heading = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Subtext = styled.p`
    font-size: 18px;
    color: #666;
    max-width: 600px;
`;

const FourOFour = () => {
    return (
        <Container>
            <Heading>Sorry, no page uncovered!</Heading>
            <Subtext>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</Subtext>
        </Container>
    );
};

export default FourOFour;
