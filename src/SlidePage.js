import React, { useContext } from 'react';
import { SlideContext } from './SlideContext';
import './SlidePage.css';

const slides = [
    // Define your slides here with valid HTML structure
    "Welcome to Slide 1! This is the first slide content.",

    // Slide 2 content
    <div>
      <h2>Slide 2</h2>
      <p>This is a JSX element for Slide 2.</p>
      <img src="image_url.jpg" alt="Slide 2" />
    </div>,
  
    // Slide 3 content
    {
      title: "Slide 3",
      description: "This is an object with properties for Slide 3.",
      image: "image_url.jpg",
    },
  ];
 


const SlidePage = () => {
  const {
    activeLevel,
    setActiveLevel,
    activeSlideIndex,
    setActiveSlideIndex,
    isSlideModalOpen,
    setIsSlideModalOpen,
    handleFinishLevel,
  } = useContext(SlideContext);

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex - 1);
  };

  const handleMenuClick = () => {
    setIsSlideModalOpen(true);
  };

  const handleExitSlide = () => {
    setActiveSlideIndex(0);
    setIsSlideModalOpen(false);
    setActiveLevel(1);
  };

  return (
    <div>
      {isSlideModalOpen && (
        <div>
          <button onClick={handleExitSlide}>Exit</button>
          <button onClick={() => setIsSlideModalOpen(false)}>Close</button>
        </div>
      )}
      <h2>Slide Page - Level {activeLevel}</h2>
      <div>
        {slides[activeSlideIndex] ? (
          <div>
            <p>{slides[activeSlideIndex]}</p>
            {activeSlideIndex > 0 && (
              <button onClick={handlePreviousSlide}>Back</button>
            )}
            {activeSlideIndex < slides.length - 1 && (
              <button onClick={handleNextSlide}>Next</button>
            )}
            {activeSlideIndex === slides.length - 1 && (
              <button onClick={handleFinishLevel}>Finish</button>
            )}
          </div>
        ) : (
          <div>No more slides for this level.</div>
        )}
      </div>
      <button onClick={handleMenuClick}>Menu</button>
    </div>
  );
};

export default SlidePage;
