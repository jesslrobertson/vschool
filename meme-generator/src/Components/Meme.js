import React, {useEffect} from 'react';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    });

    const [allMemes, setAllMemes] = React.useState([]);
    
    function memePicker(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomNumber].url
        }))
    }
useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        .catch(err => console.log(err))
}, [])

    return(
        <div className='form-container'>
            <input 
            className="line-one" 
            type="text" 
            placeholder="top line"
            name='topText'
            value={meme.topText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme,
                topText: e.target.value
            }))}
            ></input>
            <input 
            className="line-two" 
            type="text" 
            placeholder="bottom line"
            name='bottomText'
            value={meme.bottomText}
            onChange={(e) => setMeme(prevMeme => ({
                ...prevMeme, 
                bottomText: e.target.value
            }))}
            ></input>
            <button className='submit-button' onClick={memePicker}>
                Get a new meme image  🖼
            </button>
            <div className='meme'>
                <img className="meme-image" src={meme.randomImage}></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}


