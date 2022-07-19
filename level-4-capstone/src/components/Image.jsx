import { useState, useCallback, useEffect } from 'react'
import styles from './Image.module.css'

const Image = (props ) => {
  const [zoom, setZoom] = useState(false)
  const { hdurl, url } = props;

  const setFlag = () => {
    setZoom(true)
  }

  const unsetFlag = () => {
    setZoom(false)
  }
  console.log(zoom)

    return (
      <>
        {zoom ? (
          <div 
            onClick={unsetFlag} 
            className={styles.lightbox}
            >
            <img src={hdurl} className={`${styles.show_large}`} />
          </div>
        ) : (
          <img src={url} onClick={setFlag} className={`${styles.image}`}></img>
        )}
      </>
    )
}

export default Image
