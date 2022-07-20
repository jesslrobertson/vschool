import React, {useEffect, useState, useContext} from "react";
import styles from '../pages/Splash.module.css'
import { SearchContext } from './SearchContext'

export default React.memo(function Search() {
  const [searchValue, setSearchValue] = useState("")

  const { searchNasa } = useContext(SearchContext)

  function handleChange(e) {
    setSearchValue(e.target.value)
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
      onClick={() => searchNasa(searchValue)}
      >
        Blast Off!
      </button>
    </div>
  );
})
