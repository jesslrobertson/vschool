import React, { useContext, useEffect } from "react";
import Thumbnail from '../components/Thumbnail'
import { SearchContext } from '../components/SearchContext'


export default function SearchResults() {
  const [viewLarge, setViewLarge] = react.useState(false)
  const [thumbs, setThumbs] = react.useState('')

  const { results } = useContext(SearchContext)

  useEffect(function(){
    setThumbs(results)
  },[results])
  const { clearInterval, title, nasa_id, date_created, href, thumb } = results

  return (
    <div className='result-box'>
      <h2>Search results appear here</h2>
      <div className='gallery'>
        <Thumbnail 
        
        />
      </div>
    </div>
  );
}
