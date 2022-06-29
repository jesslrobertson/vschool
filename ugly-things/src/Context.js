import React, {useState, useContext, useEffect} from 'react'
const axios = require('axios').default;


const UglyContext = React.createContext()

function UglyProvider(props){
    const [uglyArray, setUglyArray] = useState([])
    
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    function addItem(props){
        setUglyArray(prev => ({
            ...prev,
            title: "",
            description: "",
            imgUrl: ""
        }))
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/jessr/thing")
            .then(res => {
                setUglyArray([res])
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <UglyContext.Provider 
            value={{
                uglyArray,
                addItem
            }}>
            {props.children}
        </UglyContext.Provider>
    )
}

    



export  {UglyContext, UglyProvider}