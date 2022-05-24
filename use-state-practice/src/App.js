import logo from './logo.svg';
import './App.css';
import React from "react"







function App() {
  const [color, setColor] = React.useState("pink")
  const [people, setPeople] = React.useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])
  
  function colorPicker(){
      setColor(prevColor => {
        if (prevColor === "pink") {
          return "blue";
        } else {
          return "pink";
        }
      })
    }
    
    function addPeople(prevPeople){
      setPeople(prevPeople => {
      return [ ...prevPeople, {
        firstName: "Nori",
        lastName: "Night"
      }]
    })
    console.log(people);
    }
  
  return (
    <div className="App">
      <h1 onClick={colorPicker}>{color}</h1>
      <h2 onClick={addPeople}>People</h2>
    </div>
  );
}

export default App;


