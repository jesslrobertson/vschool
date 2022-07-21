import React, { useState, useContext } from "react";
import axios from 'axios'

const SearchContext = React.createContext()

function SearchProvider(props) {
  const [results, setResults] = useState([])

  function searchNasa(value) {
    const query = value.split(" ").join("%");

    function getImg(res){
      const imgData = res.data.collection.items
        imgData.map(item => {
          console.log(item.href)
        })
      }

    axios
      .get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
      .then((res) => {
        const imgObjects = res.data.collection.items
        imgObjects.forEach(item => {
          axios.get(item.href).then(result => {
            item.original = result.data[0]
          })
        })
        setResults(imgObjects)
      })
      .catch((err) => console.log(err));
  }

  console.log(results)

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