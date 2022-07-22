import React, { useContext } from "react";
import Thumbnail from "../components/Thumbnail";
import { SearchContext } from "../components/SearchContext";

export default function Gallery() {
  const { results } = useContext(SearchContext);

  return (
    <div className="results-box">
      {results.length > 0 ? (
        <div className="gallery">
          {results.map((item) => {
            const { center, date_created, description, nasa_id, title } =
              item.data[0];
            const { href } = item.links[0];

            return (
              <Thumbnail
                thumbnail={href}
                origUrl={item.href}
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
        <h3 className="try-again">Search away!</h3>
      )}
    </div>
  );
}
