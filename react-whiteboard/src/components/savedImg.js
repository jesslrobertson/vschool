import React from "react"


export default function savedImg(props){
  const {imgURL} = props

  return (
    <img
      src={imgURL}
      className='gallery-image'
    />
  )
}