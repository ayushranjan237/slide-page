// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import App from './components/App';


const rootElement = document.getElementById('root');

// Use createRoot from "react-dom/client"
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
