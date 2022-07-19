import React, { useEffect, useState } from "react";
import SingleImage from '../components/SingleImage'
import axios from 'axios';

export default React.memo(function RandomImage() {
  const [imgData, setImgData] = useState('')
  const [getNew, setGetNew] = useState(false);

  useEffect(function(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=nKFs6NmmEclwkFJCBf99pXLIzsFsLTaa5lzt9Thu&count=1')
      .then(res => {
        setImgData(res.data[0])
      })
      .catch(err => console.err(err))
    console.log('refresh')
  }, [])

  /*todo:
  write function to ensure an img file is returned

  create button to get a new random image */

  return (
    <div className='img-box'>
      <h2 className='page-title'>Random Image</h2>
      <SingleImage imgData={ imgData } />
    </div>
  );
})
