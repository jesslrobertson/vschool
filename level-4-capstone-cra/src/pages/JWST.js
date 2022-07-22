import React, { useContext, useEffect } from "react";
import Gallery from '../components/Gallery'
import { SearchContext } from "../components/SearchContext";
// import SearchResults from './SearchResults';

export default function JWST() {
  const { getJWSTImages, results } = useContext(SearchContext);

  useEffect(function(){
    getJWSTImages()
  },[])

  return (
    <div className="page-box">
      <h2 className="subtitle">Images from the James Webb Space Telescope. Click an image to learn more!</h2>
      <Gallery />
    </div>
  );
}
