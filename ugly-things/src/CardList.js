import React, {useContext, useEffect}  from 'react'
import {UglyContext} from './Context'
import Card from './Card'
const axios = require('axios').default;


export default function CardList(){
    const {uglyArray, getThings} = useContext(UglyContext)

    useEffect(() => {
        getThings()
    }, [])

    return (
        <div className='list'>
            {uglyArray.map(item => {
                return (
                    <Card 
                        key={item._id} 
                        id={item._id} 
                        title={item.title} 
                        description={item.description} 
                        imgUrl={item.imgUrl}
                    />
                );
            })}
        </div>
    )
}