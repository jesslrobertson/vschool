import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <footer>
      <div className="page-links links">
        <h4>Navigation</h4>
        <Link to="/">Home</Link>
        <Link to="APOD">NASA Astronomy Photo of the Day</Link>
        <Link to="JWST">James Webb Space Telescope Gallery</Link>
        <Link to="randomimage">Random Image</Link>
        <Link to="search">Search</Link>
      </div>
      <div className="nasa-links links">
        <h4>NASA Resources</h4>
        <a href="https://api.nasa.gov">NASA Open APIs</a>
        <a href="https://www.nasa.gov/about/sites/index.html">
          NASA Centers and Facilities
        </a>
        <a href="https://www.nasa.gov/missions">NASA Missions</a>
      </div>
      {/* <div className="sagan-tribute links">
        <h4>Tribute to Carl Sagan</h4>
        <p href="https://carlsagan.com/wp-content/uploads/2020/09/Pale-Blue-Dot-2014-version.mov" onClick={() => openInNewTab("https://carlsagan.com/wp-content/uploads/2020/09/Pale-Blue-Dot-2014-version.mov")}>
          The Pale Blue Dot
        </p>
      </div> */}
    </footer>
  );
}
