import React from "react";
import styles from './Splash.module.css'
import Search from '../components/Search'

export default function Splash() {
  return (
    <div className={styles.splash_page}>
      <div className={styles.content_box}>
        <div className={styles.quote_box}>
          <h1 className={styles.quote}>“The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.” </h1>
          <h3 className={styles.quote_credit}> - Carl Sagan</h3>
        </div>
        <div className={styles.about_box}>
          <h4>What is Voyage?</h4>
          <p>Voyage is a web app purpose built to interface NASA's public image API's. With Voyage, you can you explore the universe from the comfort of your favorite device. 
          </p>
          <p>
          Check out NASA's Astronomy Photo of the Day, or choose a random image to jump-start your curiosity. The search feature allows you to request images from specific NASA missions (like Apollo), specific dates, or projects like the James Webb Space Telescope. 
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
}
