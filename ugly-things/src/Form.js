import React, { useState, useContext } from 'react'
import CardList from './CardList'
import { UglyContext } from './Context'
const axios = require('axios').default;

export default function Form(props){

    const {addThing} = useContext(UglyContext) 
    const emptyState = {
        title: "",
        description: "",
        imgUrl: ""
    }
    const [uglyThing, setUglyThing] = useState(emptyState)
    
    function handleChange(e){
        const {title, description, imgUrl} = e.target
        setUglyThing(prevThing => {
            return {
                ...prevThing,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e){
        console.log(e)
        e.preventDefault()
        addThing(uglyThing)
        setUglyThing(emptyState)
    }

    
    return(
        <div className="main-container">
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Title" 
                        type="text"
                        name="title"
                        value={uglyThing.title}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="Description" 
                        type="text" 
                        name="description"
                        value={uglyThing.description}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="URL" 
                        type="text" 
                        name="imgUrl"
                        value={uglyThing.imgUrl}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
            <CardList />
        </div>
    )
}
