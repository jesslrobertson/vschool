import React, {useState, createContext} from 'react'
const axios = require('axios')

const ApiContext = createContext()

function ApiContextProvider(props){
  
  const [newBounty, setNewBounty] = useState({
    name: "",
    alignment: "",
    living: true,
    reward: 0
  })
  const [bounties, setBounties] = useState([])

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
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }
  //delete
  function deleteBounty(_id){
    axios.delete(`/bounties/${_id}`)
      .then(res => {
        setBounties(bounties.filter(bounty => bounty._id !== _id))
      })
      .catch(err => console.log(err))
  }

  //update
  function updateBounty(inputs, _id){
    axios.put(`/bounties/${_id}`, inputs)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== _id ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  return (
    <ApiContext.Provider 
      value={{
        newBounty: newBounty, 
        setNewBounty: setNewBounty,
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