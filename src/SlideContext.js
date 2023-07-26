// SlideContext.js
import React, { createContext, useState, useEffect } from 'react';

const SlideContext = createContext();

const SlideProvider = ({ children }) => {
  const [activeLevel, setActiveLevel] = useState(1); // Initially set to the first level
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);

  // Effect to store slide index in localStorage when navigating away from the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('slideIndex', JSON.stringify(activeSlideIndex));
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [activeSlideIndex]);
  // Effect to check for saved slide index when the user returns to the page
  useEffect(() => {
    const savedSlideIndex = JSON.parse(localStorage.getItem('slideIndex'));
    if (savedSlideIndex !== null && savedSlideIndex !== activeSlideIndex) {
      setActiveSlideIndex(savedSlideIndex);
    }
  }, [activeSlideIndex]);

  // Function to handle finishing the current level and advancing to the next one
  const handleFinishLevel = () => {
    setActiveLevel((prevLevel) => prevLevel + 1);
    setActiveSlideIndex(0);
  };

  return (
    <SlideContext.Provider
      value={{
        activeLevel,
        setActiveLevel,
        activeSlideIndex,
        setActiveSlideIndex,
        isSlideModalOpen,
        setIsSlideModalOpen,
        handleFinishLevel,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export { SlideContext, SlideProvider };
