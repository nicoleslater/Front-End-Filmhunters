import React from 'react';

const FourOFour = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Sorry, no page uncovered!</h1>
            <p style={styles.subtext}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subtext: {
        fontSize: '18px',
        color: '#666',
        maxWidth: '600px',
    },
};

export default FourOFour;
