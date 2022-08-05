import React, { useState } from 'react'

export default function Form(props){
  const {
    name = '',
    alignment = '',
    living = true,
    reward = '',
  } = props

  const initInputs = {
    name, 
    alignment, 
    living, 
    reward 
  }
  const [inputs, setInputs ] = useState(initInputs)
  
  function handleChange(e){
    const { name, value, type, checked } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: type === "checkbox" ? checked : value }))
  }


  function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs, props._id)
    console.log(props.submit)
    setInputs(initInputs)
  }

  return (
    <div className={`${props.className}`}>
      <form 
        className={`flex 
        flex-${props.flexDirection} align-center justify-center p-2 rounded-md flex-wrap`
      }
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        >
        <input 
          type='text' 
          name='name' 
          placeholder='Name' 
          value={inputs.name} 
          onChange={handleChange}/>
        <input 
          type='text' 
          name='alignment' 
          placeholder='Alignment' 
          value={inputs.alignment} 
          onChange={handleChange}/>
        <label htmlFor='living' className="flex align-center justify-between text-cyan-300 text-xl m-2 px-7 ">
          Is Alive? 
          <input
            type='checkbox' 
            name='living' 
            id='living'
            checked={inputs.living}  
            onChange={handleChange}
            className='h-5 p-1 m-0 w-5 bg-cyan-700'
            />
          </label>
        <input
          type='text' 
          name='reward' 
          placeholder='Reward' 
          value={inputs.reward} 
          onChange={handleChange}/>
        <button 
        className={props.button}
        >
          {props.btnText}
        </button>
      </form>
    </div>
  )
}