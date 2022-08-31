import React from 'react';
import Canvas from './components/Canvas'
import Gallery from "./pages/Gallery"
import './App.css';

const savedImages = []


function App() {
  return (
    <div className='App'>
      <Canvas 
        savedImages={savedImages}
      />
      <Gallery 
        savedImages={savedImages}
      />
    </div>
  );
}

export default App