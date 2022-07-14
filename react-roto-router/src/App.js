import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="title">No-Leak Geeks</h1>
          <nav style={{ margin: 10 }}>
            <div className="nav-links">
              <Link to ="/" style={{padding: 5}} className="nav-link">
              Home
              </Link>
              <Link to ="/about" style={{padding: 5}} className="nav-link">
              About
              </Link>
              <Link to ="/Services" style={{padding: 5}} className="nav-link">
              Services
              </Link>
              </div>
          </nav>
        </header>
        <div className="content">
          <Routes>
              <Route path="/" element={<Home className="home-container" />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
