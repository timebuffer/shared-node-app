// src/App.js

import React from 'react';
import './App.css'; // Optional: Create an external CSS file for styling if needed
import illustration from './assets/404-illustration.png'; // Adjust the path accordingly


function App() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '6rem', color: '#ff6b6b' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>Oops! The page you're looking for doesn't exist.</p>
      
      <div className="illustration" style={{ margin: '20px 0' }}>
        <img 
          src={illustration} 
          alt="Lost in cyberspace illustration"
          style={{ width: '300px', height: 'auto' }}  
        />
      </div>
      
      <a 
        className="home-button" 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2rem',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        Go back to Home
      </a>
      
      <div className="signature" style={{ marginTop: '30px', color: '#666' }}>
        <p>Powered by <a href="https://smartbroad.net" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>smartbroad.net</a></p>
      </div>
    </div>
  );
}

export default App;