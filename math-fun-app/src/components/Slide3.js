import React from 'react';

const Slide3 = ({ navigate }) => {
  console.log('Rendering Slide3');
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/images/File3.svg" alt="Slide 3" style={styles.image} />
        <img 
          src="/images/button.svg" 
          alt="Next Button" 
          style={styles.buttonImage} 
          onClick={() => navigate(4)} 
        />
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
  buttonImage: { 
    position: 'absolute',
    bottom: '1.3%', 
    right: '2.8%',  
    width: '110px',  
    height: '110px',
    cursor: 'pointer'
  }
};

export default Slide3;
