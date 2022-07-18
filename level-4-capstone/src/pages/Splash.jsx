import React from "react";
import '../css-pages/splash-page.css'
import Search from '../components/Search'

export default function Splash() {
  return (
    <div className='splash-page'>
      <div className='quote-container'>
        <h1 className='quote'>“The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.” </h1>
        <h3 className='quote-credit'> - Carl Sagan</h3>
      </div>
      <Search />
    </div>
  );
}
