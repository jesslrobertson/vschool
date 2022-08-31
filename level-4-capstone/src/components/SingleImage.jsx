import React from 'react'
import Image from './Image'

export default React.memo(function SingleImage(props){
    const { imgData } = props
    const { copyright, date, explanation, hdurl, title, url } = imgData
    console.log(imgData)
    return (
        <div className='single-img-box'>
            <Image 
            hdurl={hdurl}
            url={url}
            explanation = {explanation}
            />
            <div className='image-items'>
                <h3 className='img-title'>{title}</h3>
                <p className='img-description'>{explanation}</p>
                <p className='img-copyright'>Copyright {!!copyright && copyright}  {date}</p>
            </div>
        </div>
    )
})