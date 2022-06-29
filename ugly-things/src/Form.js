import React, {useState, useContext, useEffect} from 'react'
import {UglyContext, UglyProvider} from './Context'

const axios = require('axios').default;

export default function Form(props){
    // const {UglyContext} = useContext(UglyContext)
    const {uglyArray, addItem} = useContext(UglyContext)

    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    
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
        e.preventDefault()

        console.log(e)
        console.log('ugly thing:')
        console.log(uglyThing)
        addItem(uglyThing)
        axios.post("https://api.vschool.io/jessr/thing", uglyThing)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
    
    return(
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
    )
}
/*
{_id: '62bc84cf18d1a05bceae5b7e', title: 'this heap', description: 'ew', imgUrl: 'https://images.unsplash.com/photo-1601828280189-18…hc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', sessionId: 'jessr', …}
description: "ew"
imgUrl: "https://images.unsplash.com/photo-1601828280189-183aaf222986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
sessionId: "jessr"
title: "this heap"
__v: 0
_id: "62bc84cf18d1a05bceae5b7e"
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/