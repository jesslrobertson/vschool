import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  
  return (
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
  )
}
