import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Splash from "../pages/Splash";
import APOD from "../pages/APOD";
import JWST from "../pages/JWST";
import RandomImage from "../pages/RandomImage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/jwst" element={<JWST />} />
        <Route path="/randomimage" element={<RandomImage />} />
      </Routes>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }} className='title'>
          Voyage
        </Link>
        <Link to="/apod" style={{ padding: 5 }} className='header-link'>
          Astronomy Picture of the Day
        </Link>
        <Link to="/jwst" style={{ padding: 5 }} className='header-link'>
          James Webb Space Telescope Gallery
        </Link>
        <Link to="/randomimage" style={{ padding: 5 }} className='header-link'>
          Random NASA Image
        </Link>
      </nav>
    </Router>
  );
}
