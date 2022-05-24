import memeData from './data'
import React from 'react';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    });

    const [allMemeImages, setMemeImage] = React.useState(memeData.data.memes);
    
    function memePicker(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages[randomNumber].url
        }))
    }

    return(
        <div className='form-container'>
            <input className="line-one" type="text" placeholder="top line"></input>
            <input className="line-two" type="text" placeholder="bottom line"></input>
            <button className='submit-button' onClick={memePicker}>
                Get a new meme image  🖼
            </button>
            <img className="meme-image" src={meme.randomImage}></img>
        </div>
    )
}

/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */