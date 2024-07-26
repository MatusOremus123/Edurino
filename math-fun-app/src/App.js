import React, { useState } from 'react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import './App.css'; 

const App = () => {
  const [slide, setSlide] = useState(1);

  const navigate = (slideNumber) => {
    console.log(`Navigating to slide ${slideNumber}`);
    setSlide(slideNumber);
  };

  return (
    <div>
      {slide === 1 && <Slide1 navigate={navigate} />}
      {slide === 2 && <Slide2 navigate={navigate} />}
      {slide === 3 && <Slide3 navigate={navigate} />}
      {slide === 4 && <Slide4 />}
    </div>
  );
};

export default App;
