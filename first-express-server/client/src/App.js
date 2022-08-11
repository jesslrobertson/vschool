import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Show from './components/Show.js'
import AddShowForm from './components/AddShowForm.js'

export default function App() {
  const [tvShows, setTvShows ] = useState([])

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
      { tvShows.map(show => <Show 
        {...show} 
        key={show.title}
        deleteShow={deleteShow} 
        editShow={editShow}/> )}
    </div>
  )
}