import React, {useState, useContext} from 'react'
import { ApiContext } from './Context'


export default function Header(props){
  const {bounties} = useContext(ApiContext)

  return (
    <div className='flex flex-col items-center justify-center border-double border-cyan-400 border-4 rounded-xl w-[75%]  text-cyan-300'>
      <h1 className=' text-4xl text-cyan-300 m-7'>Bounty Hunter</h1>
      <p>{bounties.length} available bounties</p>
    </div>
  )
}