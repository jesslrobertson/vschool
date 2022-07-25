import { useState } from 'react'
import styles from './Image.module.css'

const Image = (props) => {
  const [zoom, setZoom] = useState(false)
  const { hdurl, url, explanation } = props;

  const setFlag = () => {
    setZoom(true)
  }

  const unsetFlag = () => {
    setZoom(false)
  }

    return (
      <>
        {zoom ? (
          <div 
            onClick={unsetFlag} 
            className={styles.lightbox}
            >
            <img 
              src={hdurl} 
              alt ={explanation}
              className={`${styles.show_large}`} 
            />
          </div>
        ) : (
          <img 
            src={url} 
            alt ={explanation}
            onClick={setFlag} 
            className={`${styles.image}`} 
          />
        )}
      </>
    )
}

export default Image
