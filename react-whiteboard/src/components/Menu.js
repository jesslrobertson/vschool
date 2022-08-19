import React, { useState } from 'react'

export default function Menu(props){
  const { setBrushSize, setBrushColor } = props

  function handleColor(color){
    setBrushColor(color)
  } 

  const colors = {
    red: '#ff0000',
    orange: '#ffa500',
    yellow: '#ffff00',
    green: '#01a201',
    blue: '#0000ff',
    purple: '#800080',
    brown: '#a52a2a',
    black: '#000000',
    white: '#ffffff'
  }
  


  return (
    <div className='menu-container'>
      <div className="swatch-box">
        <div 
          className='swatch red' 
          name="red"
          onClick={() => handleColor(colors.red)}
          />
        <div 
          className='swatch orange' 
          name="orange"
          onClick={() => handleColor(colors.orange)}
          />
        <div 
          className='swatch yellow' 
          name="yellow"
          onClick={() => handleColor(colors.yellow)}
          />
        <div 
          className='swatch green' 
          name="green"
          onClick={() => handleColor(colors.green)}
          />
        <div 
          className='swatch blue' 
          name="blue"
          onClick={() => handleColor(colors.blue)}
          />
        <div 
          className='swatch violet'  
          name="violet"
          onClick={() => handleColor(colors.purple)}
          />
        <div 
          className='swatch black' 
          name="black"
          onClick={() => handleColor(colors.black)}
          />
        <div 
          className='swatch brown' 
          name="black"
          onClick={() => handleColor(colors.brown)}
          />
        <div 
          className='swatch eraser' 
          name="eraser"
          onClick={() => handleColor(colors.white)}
          />
      </div>
    </div>
  )
}