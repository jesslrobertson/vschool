import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import HeaderHome from './components/HeaderHome'


function App() {
  const [count, setCount] = useState(0);

  return (
		<Router>
			<div className="App">
				<HeaderHome />
				<AppRouter/>
			</div>
		</Router>
  );
}

export default App;
