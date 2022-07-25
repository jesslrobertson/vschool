import React, { useState } from "react"
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'

export default function SlidingMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const visibility = showMenu ? 'show' : 'hide'

  function toggleMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="nav-container">
      <MenuButton toggleMenu={toggleMenu}/>
      <div 
        className={`${visibility} menu`} 
        onClick={toggleMenu} 
      >
        <div className="link-container">
          <Link to="/" className='nav-link'>
          Home
          </Link >
        </div>
        <div className="link-container">
          <Link to="/apod" className='nav-link'>
            NASA Astrononmy Image of the Day
          </Link >
        </div>
        <div className="link-container">
          <Link to="/jwst" className='nav-link'>
            James Webb Space Telescope Gallery
          </Link >
        </div>
        <div className="link-container">
          <Link to="/randomimage" className='nav-link'>
            Random Image
          </Link >
        </div>
        <div className="link-container">
          <Link to="/search" className='nav-link'>
            Search
          </Link >
        </div>
      </div>
    </div>
  );
}
