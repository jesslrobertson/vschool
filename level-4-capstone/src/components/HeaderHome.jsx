import React, { useState } from 'react'
import SlidingMenu from './SlidingMenu'

export default function Header() {
  const [isHome, setIsHome] = useState(true);

  return (
    <header className="header-home">
      <h1 className="title">VOYAGE</h1>
      <SlidingMenu />
    </header>
  );
}
