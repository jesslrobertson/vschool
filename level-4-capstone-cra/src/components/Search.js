import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../pages/Splash.module.css'
import { SearchContext } from './SearchContext'

export default React.memo(function Search() {
  const { searchNasa, previousSearch, setPreviousSearch } = useContext(SearchContext)
  const [searchValue, setSearchValue] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    searchNasa(searchValue)
    setPreviousSearch(searchValue)
    setSearchValue("")
    location.pathname === "/" && navigate("/search")
  }

  return (
    <div className='search-statement'>
      <form 
      className={`${styles.search_box} search-box`}
      onSubmit={handleSubmit}>
        <input 
          placeholder="explore..." 
          className='search-bar' 
          name='search'
          id='search'
          value={searchValue}
          onChange={handleChange}
          type="text"
          />
        <button>Blast Off!</button>
      </form>
      {previousSearch && location.pathname === "/search" && <h5 className='previous-search'>Your search for "{previousSearch}" returned the following results. Click an image to learn more!</h5>}
    </div>
  );
})
