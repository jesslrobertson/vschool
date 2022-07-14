import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About'

function App() {
  return (
    <Router>
			<nav style={{ margin: 10 }}>
				<Link to="/" style={{ padding: 5 }} >
				Home
				</Link>
				<Link to="/about" style={{ padding: 5 }} >
				About
				</Link>
			</nav>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
  );
}

export default App;
