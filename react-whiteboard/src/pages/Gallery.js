import React from 'react'
import SavedImg from "../components/savedImg"

export default function Gallery(props){

  const {savedImages} = props

  return (
    <div className='gallery-container'>
      {savedImages.map((imgURL) => {
        return (
          <SavedImg
            imgURL={imgURL}
          />
        )
      })}
    </div>
  )
}