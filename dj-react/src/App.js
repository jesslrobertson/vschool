import './App.css';
import React from 'react'
import Header from './Components/Header';
import ColorBoard from './Components/ColorBoard';
import Controls from "./Components/Controls";

function App() {
  const [colors, setColor] = React.useState(["white", "white", "white", "white"]);
  console.log(colors);
  return (
    <div className="App">
      <Header />
      <ColorBoard colors={colors} />
      <Controls setColor={setColor} />
    </div>
  );
}

export default App;
