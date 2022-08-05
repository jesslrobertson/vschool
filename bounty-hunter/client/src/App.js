import React, { useContext } from 'react'
import './input.css';
import Board from './components/Board'
import Header from './components/Header'
import Form from './components/Form'
import { ApiContext } from './components/Context';

function App() {
  const { addBounty } = useContext(ApiContext)
  return (
    <div className="App">
      <Header />
      <Form 
        submit={addBounty}
        btnText="Add Bounty"
        flexDirection='row'
        className='flex align-center justify-center w-screen m-8'
        button='inherit'/>
      <Board />
    </div>
  );
}

export default App;
