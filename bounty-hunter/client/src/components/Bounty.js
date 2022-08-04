import React, { useContext, useState } from 'react'
import { ApiContext} from './Context'

export default function Bounty(props){
  const { name, alignment, status, reward, id } = props

  return(
    <div 
    className='flex-column border-double border-cyan-300 border-4 rounded-lg m-10 text-cyan-500 p-5'
    key={name}
    >
      <h2 className='name'>{name}</h2>
      <h3>Alignment: {alignment}</h3>
      <h3>Status: {status}</h3>
      <h3>Reward: {reward}</h3>
    </div>
  )
}