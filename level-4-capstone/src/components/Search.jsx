import React from "react";
import styles from '../pages/Splash.module.css'

export default function Search() {
  return (
    <div className={styles.search_box}>
      <input placeholder="explore..." className='search-bar' />
      <button className="search-button">Blast Off!</button>
    </div>
  );
}
