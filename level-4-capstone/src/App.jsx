import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Nav from './components/Nav'
import Header from "./components/HeaderHome";

function App() {
  const [count, setCount] = useState(0);

  return (
		<Router>
			<div className="App">
				<AppRouter/>
					<Nav />
				
				
			</div>
		</Router>
  );
}

export default App;
