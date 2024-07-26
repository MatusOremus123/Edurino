import React from 'react';

const Slide1 = ({ navigate }) => {
  console.log('Rendering Slide1');
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/images/File1.svg" alt="Slide 1" style={styles.image} />
        <img 
          src="/images/button.svg" 
          alt="Next Button" 
          style={styles.buttonImage} 
          onClick={() => navigate(2)} 
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    height: '100vh',
    backgroundColor: '#9fd3c7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  imageContainer: {
    position: 'relative',
    width: '80%', 
    height: 'auto'
  },
  image: { 
    width: '30%', 
    height: 'auto' 
  },
  buttonImage: { 
    position: 'absolute',
    bottom: '2.3%', 
    right: '36%',  
    width: '190px',  
    height: '190px',
    cursor: 'pointer'
  }
};

export default Slide1;
