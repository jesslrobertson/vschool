import React, { useState } from "react";

export default function Thumbnail(props) {
  const [showLarge, setShowLarge] = useState(false);
  const { thumbnail, original, center, date, description, id, title } = props;

  console.log(original);

  function openImage() {
    setShowLarge(true);
    console.log(original);
  }

  function closeImage() {
    setShowLarge(false);
  }

  const largeImg = (
    <div className="search-popup" onClick={closeImage}>
      <img className="large-image" src={original} />
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
      <img src={thumbnail} className="thumbnail" />
    </div>
  );

  return <>{showLarge ? largeImg : thumbnailImg}</>;
}
