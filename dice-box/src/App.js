import './App.css';
import React from 'react'
import DiceBox from './DiceBox.js'
import Die from './Die'

function App() {
  const [dice, setDice] = React.useState([1, null, null, null, null])
  return (
    <div className="App">
      <DiceBox setDice={setDice} dice={dice}/>
      <Die dice={dice} />
    </div>
  );
}

export default App;
