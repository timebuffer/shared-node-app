import React from 'react';
import ReactDOM from 'react-dom'; // If you have a CSS file, keep this. If not, you can remove it.
import App from './App';  // Ensure this matches the exact name of the App component file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
