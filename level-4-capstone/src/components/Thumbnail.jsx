import React, { useState } from "react";

export default function Thumbnail(props) {
  const { thumb, url, title, explanation } = props;

  return (
    <div className="thumbnail">
      <img src={thumb} />
    </div>
  );
}
