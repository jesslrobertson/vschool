import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'

function Main(){

    const {color} = useContext(ThemeContext)
    return (
        <div className={`main-container ${color}-theme-content`}>
            <h2 className={`${color}-text`}>Here is some content!</h2>
            <div className={`main-content`}>
                <p className={`${color}-text`}>Tendrils of gossamer clouds rogue radio telescope tingling of the spine Vangelis courage of our questions. Gathered by gravity globular star cluster how far away hundreds of thousands stirred by starlight invent the universe. Hearts of the stars kindling the energy hidden in matter hundreds of thousands the only home we've ever known Tunguska event inconspicuous motes of rock and gas. Network of wormholes emerged into consciousness the only home we've ever known hearts of the stars Orion's sword a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
                <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6"/>
            </div>
        </div>
    )
}

export default Main;