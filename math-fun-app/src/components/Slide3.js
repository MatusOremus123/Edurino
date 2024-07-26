import React from 'react';

const Slide3 = () => {
  console.log('Rendering Slide3');
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="/images/File3.svg" alt="Slide 3" style={styles.image} />
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
  }
};

export default Slide3;
