import React, { useState } from "react";
import axios from 'axios'

const SearchContext = React.createContext()

function SearchProvider(props) {
  const [results, setResults] = useState([])
  const [original, setOriginal] = useState("")
  const [previousSearch, setPreviousSearch] = useState("")

  function searchNasa(value) {
    const query = encodeURIComponent(value);

    axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
      .then((res) => {
        const imgObjects = res.data.collection.items
        setResults(imgObjects)
      })
      .catch((err) => console.log(err))
  }

  function filterJWST(array){
    return array.filter(item => item.data[0].center !== "STScI (Hubble)")
  }

  function getJWSTImages(){
    axios.get('https://images-api.nasa.gov/search?center=STScI&media_type=image')
      .then((res) => {
        const STScIObjects = res.data.collection.items
        const JWSTObjects = filterJWST(STScIObjects);
        setResults(JWSTObjects)
        console.log(JWSTObjects)
      })
      .catch((err => console.log(err)))
  }

  function getImg(url){
    axios.get(url)
    .then((res) => {
      setOriginal(res.data[0]);
    })
    .catch((err) => console.log(err))
  }

  return (
    <SearchContext.Provider 
        value={{
            results,
            searchNasa,
            getImg,
            original,
            setOriginal,
            getJWSTImages,
            previousSearch,
            setPreviousSearch
        }}>
        {props.children}
    </SearchContext.Provider>
  )
}

export  {SearchContext, SearchProvider}