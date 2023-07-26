// App.js
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Remove the alias 'Route' here
import SlidePage from '../SlidePage';
import { SlideProvider } from '../SlideContext';

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <Link to="/slide">Go to Slide Page</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <SlideProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/slide" element={<SlidePage />} />
        </Routes>
      </SlideProvider>
    </Router>
  );
};

export default App;
