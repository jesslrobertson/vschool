import React from 'react'
import { Link } from 'react-router-dom'
import SlidingMenu from './SlidingMenu'

export default function Header() {
  return (
    <header className="header-home">
      <Link to="/" className='title'>
        <h1 className="title">VOYAGE</h1>
      </Link>
      <SlidingMenu />
    </header>
  );
}
