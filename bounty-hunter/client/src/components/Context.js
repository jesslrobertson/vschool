import React, {useState, useEffect, useContext, createContext} from 'react'
const axios = require('axios')

const ApiContext = createContext()

function ApiContextProvider(props){
  const { _id } = props
  const [newBounty, setNewBounty] = useState({
    name: "",
    alignment: "",
    status: "",
    reward: 0
  })
  const [bounties, setBounties] = useState([])
  const [updates, setUpdates] = useState()

  //get
  function getBounties(){
    axios.get("/bounties")
      .then(res => {
        setBounties(res.data)
      })
      .catch(err => console.log(err))
  }
  
  //post
  function addBounty(newBounty){
    console.log(newBounty)
    axios.post('/bounties', newBounty)
      .then(res => {
        console.log(res.data)
        // getBounties()
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }
  //delete
  function deleteBounty(_id){
    axios.delete('/bounties', _id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  //update
  function updateBounty( _id, updates){
    axios.put(`/bounties/${_id}`, updates)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <ApiContext.Provider 
      value={{
        newBounty: newBounty, 
        setNewBounty: setNewBounty,
        updates: updates, 
        getBounties: getBounties,
        addBounty: addBounty,
        deleteBounty: deleteBounty,
        updateBounty: updateBounty,
        bounties: bounties, 
        setBounties: setBounties
      }}>
      {props.children}
    </ApiContext.Provider>
  )

}











export {ApiContext, ApiContextProvider}