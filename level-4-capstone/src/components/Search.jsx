import React, { useState, useContext} from "react";
import { Link, useLocation } from 'react-router-dom'
import styles from '../pages/Splash.module.css'
import { SearchContext } from './SearchContext'

export default React.memo(function Search() {
  const [searchValue, setSearchValue] = useState("")
  const [previousSearch, setPreviousSearch] = useState("")

  const { searchNasa } = useContext(SearchContext)

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  const linkButton = 
    <Link to="/search">
      <button
        className="search-button"
        onClick={() => {
          searchNasa(searchValue)
          setSearchValue("")
          }
        }
      >
        Blast Off!
      </button>
    </Link>

  const searchButton =
    <button 
    className="search-button"
    onClick={() => {
      searchNasa(searchValue)
      setPreviousSearch(searchValue);
      setSearchValue("")
      }
    }
    >
      Blast Off!
    </button>
  
  const location = useLocation()
  console.log(location.pathname)

  return (
    <div className='search-statement'>
      <div className={`${styles.search_box} search-box`}>
        <input 
          placeholder="explore..." 
          className='search-bar' 
          name='search'
          id='search'
          value={searchValue}
          onChange={handleChange}
          type="text"
          />
        {location.pathname == '/'
          ? linkButton 
          : searchButton
          }
      </div>
      {previousSearch && <h5 className='previous-search'>Your search for "{previousSearch}" returned...</h5>}
    </div>
  );
})
