import React, { useState, useContext } from "react";
import axios from 'axios'

const SearchContext = React.createContext()

function SearchProvider(props) {
  const [results, setResults] = useState("")

  function searchNasa(value) {
    const query = value.split(" ").join("%");

    axios
      .get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
      .then((res) => {
        setResults(res.data.collection.items);
        console.log(results);
      })
      .catch((err) => console.err(err));
  }


  return (
    <SearchContext.Provider 
        value={{
            results,
            searchNasa
        }}>
        {props.children}
    </SearchContext.Provider>
  )
}

export  {SearchContext, SearchProvider}