import React, {useEffect, useState} from "react";
import styles from '../pages/Splash.module.css'
import axios from 'axios';

export default React.memo(function Search() {
  const [searchValue, setSearchValue] = useState("")
  const [results, setResults] = useState("")

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  function searchify(searchValue){
    const query = searchValue.split(" ").join("%")
    searchNasa(query)
  }

  function searchNasa(query){
    axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
      .then(res => {
        setResults(res.data.collection.items)
        console.log(results);
      })
      .catch(err => console.err(err))
  }




  return (
    <div className={styles.search_box}>
      <input 
        placeholder="explore..." 
        className='search-bar' 
        name='search'
        id='search'
        value={searchValue}
        onChange={handleChange}
        type="text"
        />
      <button 
      className="search-button"
      onClick={() => searchify(searchValue)}
      >
        Blast Off!
      </button>
    </div>
  );
})
