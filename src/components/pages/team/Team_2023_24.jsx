// src/pages/events/Team_2023_24.jsx
import React from 'react';
import SCCardList from './teamcards/SCCardList';
import JCCardList from './teamcards/JCCardList';
import POCardList from './teamcards/POCardList';

function Team_2023_24() {
  // Define styles for the component
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Pacifico, cursive',
      background: 'white', // White background
    },
    heading: {
      fontSize: '3em',
      color: '#4285F4', // Google Blue heading
      fontFamily: 'inherit',
    },
    subheading: {
      fontSize: '2em',
      color: '#0F9D58', // Google Green subheading
      fontFamily: 'inherit',
    },
  };
  
  
  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Team 2023-24</h1>
      <br />
      <h2 style={styles.subheading}>Program Officers</h2>
      <br />
      <POCardList />
      <br />
      <h2 style={styles.subheading}>Senior Council</h2>
      <br />
      <SCCardList />
      <br />
      <h2 style={styles.subheading}>Junior Council</h2>
      <br />
      <JCCardList />
    </div>
  );
}

export default Team_2023_24;
