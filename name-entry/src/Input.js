import {useState} from 'react';

export default function Input(props){
    const {list, setList} = props;
    const [inputValue, setInputValue] = useState("")
    
    function newName(newItem){
        setList(prevList => {
            return [
                ...prevList,
                newItem
            ]
        })
        setInputValue("");
    }
    
    return (
        <div>
            <form>
                <input 
                    autoFocus
                    type='text'
                    placeholder="new name here"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    name="input"
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    newName(inputValue)
                }}>Add to List</button>
                <h1>{inputValue}</h1>
            </form>
        </div>
    )
}