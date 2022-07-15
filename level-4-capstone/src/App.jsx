import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppRouter />
			
    </div>
  );
}

export default App;
