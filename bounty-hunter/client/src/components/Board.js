import React, { useEffect, useContext } from 'react'
import { ApiContext } from './Context'
import Bounty from "./Bounty"

export default function Board(props){

  const { getBounties, bounties, updateBounty, deleteBounty } = useContext(ApiContext);



  useEffect(function(){
    getBounties()
  }, [])
  console.log(bounties)
  return (
    <div className='board'>
      {bounties.map(bounty => <Bounty
        {...bounty}
        key={bounty._id}
        deleteBounty={deleteBounty}
        updateBounty={updateBounty}
        />)}
    </div>
  )
}