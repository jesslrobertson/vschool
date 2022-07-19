import React from "react";
import styles from './Splash.module.css'
import Search from '../components/Search'

export default function Splash() {
  return (
    <div className={styles.splash_page}>
      <div className={styles.quote_box}>
        <h1 className={styles.quote}>“The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.” </h1>
        <h3 className={styles.quote_credit}> - Carl Sagan</h3>
      </div>
      <Search />
    </div>
  );
}
