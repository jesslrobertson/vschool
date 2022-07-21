import React, { useContext, useState, useEffect } from "react";
import Thumbnail from "../components/Thumbnail";
import { SearchContext } from "../components/SearchContext";
import Search from "../components/Search";

export default function SearchResults() {
  const { results } = useContext(SearchContext);

  //results[i].data[0] - info
  //results[i].links[0] - thumbnail url
  //results[i].original - full size url

  return (
    <div className="page-box">
      <Search />
      <div className="results-box">
        {results.length > 0 && (
          <h3 className="sub-title">Click an image to learn more!</h3>
        )}
        {results.length > 0 ? (
          <div className="gallery">
            {results.map((item) => {
              console.log("item");
              console.log(item);
              const { center, date_created, description, nasa_id, title } =
                item.data[0];
              const { href } = item.links[0];

              return (
                <Thumbnail
                  thumbnail={href}
                  original={item.original}
                  center={center}
                  date={date_created}
                  description={description}
                  id={nasa_id}
                  title={title}
                  key={nasa_id}
                />
              );
            })}
          </div>
        ) : (
          <h3 className="try-again">
            That search didn't return any results. Try again?
          </h3>
        )}
      </div>
    </div>
  );
}
