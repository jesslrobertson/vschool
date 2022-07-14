import React, {useState, useContext, useEffect} from 'react'
import axios from "axios";



const UglyContext = React.createContext()

function UglyProvider(props){
    const [uglyArray, setUglyArray] = useState([])

    function getThings(){
        axios.get("https://api.vschool.io/jessr/thing")
            .then(res => {
                setUglyArray(res.data)
            })
            .catch(err => console.error(err))
    }

    function addThing(uglyThing){
        axios.post("https://api.vschool.io/jessr/thing", uglyThing)
        .then(response => getThings())
        .catch(error => console.log(error))
    }

    function deleteThing(id){
        axios.delete(`https://api.vschool.io/jessr/thing/${id}`)
            .then(res => getThings())
            .catch(err => console.error(err))
    }

    function editThing(id, editedThing){
        console.log(id)
        axios.put(`https://api.vschool.io/jessr/thing/${id}`, editedThing)
            .then(res => getThings())
            .catch(err => console.error(err))
    }

    return (
        <UglyContext.Provider 
            value={{
                uglyArray,
                getThings,
                addThing,
                deleteThing,
                editThing
            }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export  {UglyContext, UglyProvider}