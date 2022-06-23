import {useState} from 'react'

export default function (){
    const [color, setColor] = useState([])

    fetch('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()')
        .then(res => res.json())
        .then(res => setColor(res.colors[0].hex))
        .catch(err => console.log(err))
    console.log(color)
    return (
        <div 
        className='color-square'
        style={{background: `#${color}`}}>

        </div>
    )
}