import './App.css';
import Header from './Header.js'
import Form from './Form'
import React, {useContext} from 'react'
import {UglyContext} from './Context'

function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      
    </div>
  );
}

export default App;
