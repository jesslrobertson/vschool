import React, { useContext, useState } from 'react'
import { UglyContext } from './Context'

export default function Card(props){
    const { id, title, description, imgUrl} = props;
    
    const [edit, setEdit] = useState(false)
    const [editedThing, setEditedThing] = useState({
        title,
        description,
        imgUrl
    })

    const { getThings, deleteThing, editThing }  = useContext(UglyContext)

    function handleEdit(e){
        setEdit(true);

        setEditedThing(prevThing => {
            return {
                ...prevThing,
                [e.target.name]: e.target.value
            }
        })
    }

    function saveEdit() {
        editThing(id, editedThing);
        setEdit(false)
        getThings()
    }

    const editState = 
        <>
            <input 
                type="text"
                name="title"
                value={editedThing.title}
                onChange={handleEdit}
            />
            <input 
                type="text"
                name="imgUrl"
                value={editedThing.imgUrl}
                onChange={handleEdit}
            />
            <input 
                type="text"
                name="title"
                value={editedThing.description}
                onChange={handleEdit}
            />
            <div>
                <button 
                    className='save-button' 
                    onClick={saveEdit}>
                    Save
                </button>
                <button 
                    className="cancel-button" 
                    onClick={() => setEdit(false)}>
                    Cancel
                </button>
            </div>
        </>

    const displayState = 
        <>
            <h2 className='title'>
                {title}
            </h2>
            <img className='ugly-img' src={`${imgUrl}`} />
            <p className='description'>
                {description}
            </p>
            <div>
                <button className='edit-button' onClick={handleEdit}>
                    Edit
                </button>
                <button className='delete-button' onClick={() => deleteThing(id)}>
                    Delete
                </button>
            </div>
        </>
    
    return (
        <div className='ugly-box'>
            {edit
                ? editState
                : displayState
            }
        </div>
    )
}