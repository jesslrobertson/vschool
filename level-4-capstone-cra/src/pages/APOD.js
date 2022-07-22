import React, {useState, useEffect} from "react";
import SingleImage from '../components/SingleImage';
import axios from 'axios';

export default React.memo(function APOD() {
  const [imgData, setImgData] = useState('');

  useEffect(function() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=nKFs6NmmEclwkFJCBf99pXLIzsFsLTaa5lzt9Thu')
    .then(res => setImgData(res.data))
    .catch(err => console.err(err))
    //.finally
  }, [])

  return (
    <div className='img-box'>
      <h2 className='page-title'>NASA's Astronomy Picture of the Day</h2>
      <SingleImage
      imgData={ imgData }
      />
    </div>
  );
})
