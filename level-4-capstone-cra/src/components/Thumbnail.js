import React, { useState, useContext } from "react";
import { SearchContext } from "../components/SearchContext";

export default function Thumbnail(props) {
  const [showLarge, setShowLarge] = useState(false);
  const { thumbnail, origUrl, center, date, description, title } = props;
  const { getImg, original, setOriginal } = useContext(SearchContext);

  function openImage() {
    getImg(origUrl)
    setShowLarge(true);
  }

  function closeImage() {
    setShowLarge(false);
    setOriginal("")
  }

  const largeImg = (
    <div className="search-popup" onClick={closeImage}>
      <img className="large-image" src={original} alt={description}/>
      <div className="popup-description">
        <h3 className="img-title">{title}</h3>
        <h5 className="img-center">from {center}</h5>
        <p className="img-description">{description}</p>
        <p className="img-date">{date}</p>
      </div>
    </div>
  );

  const thumbnailImg = (
    <div className="thumbnail-box" onClick={openImage}>
      <img src={thumbnail} className="thumbnail" alt={description} />
    </div>
  );

  return (
    <>
      {showLarge ? largeImg : thumbnailImg}
    </>
    )
}
