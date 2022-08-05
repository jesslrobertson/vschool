import React, { useEffect, useContext, useState } from 'react'
import { ApiContext } from './Context'
import Bounty from "./Bounty"

export default function Board(props){

  const { getBounties, bounties, updateBounty, deleteBounty } = useContext(ApiContext);
  const [editToggle, setEditToggle] = useState(false)

  useEffect(function(){
    setEditToggle(false)
  },[bounties])

  useEffect(function(){
    getBounties()
  }, [])
  return (
    <div className='flex flex-row flex-wrap w-full justify-center align-middle'>
      {bounties.map(bounty => <Bounty
        {...bounty}
        key={bounty._id}
        deleteBounty={deleteBounty}
        updateBounty={updateBounty}
        setEditToggle={setEditToggle}
        editToggle={editToggle}
        />)}
    </div>
  )
}