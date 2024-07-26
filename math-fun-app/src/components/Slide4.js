import React, { useState } from 'react';

const Slide4 = ({ navigate }) => {
  console.log('Rendering Slide4');
  const [currentImage, setCurrentImage] = useState('/images/File4.svg');

  const handleEggClick = (number) => {
    console.log(`Egg ${number} clicked`);
    if (number === 1) {
      setCurrentImage('/images/File5.svg'); 
    } else if (number === 3) {
      setCurrentImage('/images/FileGood.svg'); 
    } else if (number === 5) {
      setCurrentImage('/images/File6.svg'); 
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={currentImage} alt="Slide 4" style={styles.image} />
        {currentImage === '/images/File4.svg' && (
          <>
            <img 
              src="/images/egg1.svg" 
              alt="Egg 1" 
              style={{ ...styles.egg, left: '8%', bottom: '5%' }} 
              onClick={() => handleEggClick(1)} 
            />
            <img 
              src="/images/egg3.svg" 
              alt="Egg 3" 
              style={{ ...styles.egg, left: '35.9%', bottom: '5%' }} 
              onClick={() => handleEggClick(3)} 
            />
            <img 
              src="/images/egg5.svg" 
              alt="Egg 5" 
              style={{ ...styles.egg, left: '64%', bottom: '5%' }} 
              onClick={() => handleEggClick(5)} 
            />
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    height: '100vh',
    backgroundColor: '#9fd3c7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    height: 'auto'
  },
  image: { 
    width: '100%', 
    height: 'auto' 
  },
  egg: { 
    position: 'absolute',
    width: '100px',
    height: '100px',
    cursor: 'pointer'
  }
};

export default Slide4;
