import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Show from './components/Show.js'
import AddShowForm from './components/AddShowForm.js'

export default function App() {
  const [tvShows, setTvShows ] = useState([])
  
  function handleFilter(e){
    if(e.target.value === "reset"){
      getShows()
    } else {
    axios.get(`/tvshows/search/genre?genre=${e.target.value}`)
    .then(res => setTvShows(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    }
  }

  //get all
  function getShows(){
    axios.get("/tvShows")
      .then(res => setTvShows(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addShow(newShow){
    axios.post("/tvShows", newShow)
    .then(res => {
      setTvShows(prevShows => [...prevShows, res.data])
    })
    .catch(err => console.log(err))
  }

  function deleteShow(showId){
    axios.delete(`/tvShows/${showId}`)
      .then(res => {
        setTvShows(prevShows => prevShows.filter(show => show._id !== showId))
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getShows()
  }, [])

  function editShow(updates, showId) {
    axios.put(`/tvShows/${showId}`, updates)
      .then(res => {
        setTvShows(prevShows => prevShows.map(show => show._id !== showId ? show : res.data))
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="show-container" >
      <AddShowForm 
        submit={addShow}
        btnText="Add Show"
      />
      <h4>Filter by Genre</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">- All Shows - </option>
        <option value="fantasy">Fantasy</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="horror">Horror</option>
      </select>
      { tvShows.map(show => <Show 
        {...show} 
        key={show.title}
        deleteShow={deleteShow} 
        editShow={editShow}/> )}
    </div>
  )
}