import React, { useState } from 'react'

export default function Form(props){
  const initInputs = {
    name: props.name ||"", 
    alignment: props.alignment || "", 
    status: props.status || "", 
    reward: props.reward || 0 
  }
  const [inputs, setInputs ] = useState(initInputs)
  
  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value }))
  }


  function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
  }

  return(
    <div className="flex align-center justify-center w-screen">
      <form 
        className='flex align-center justify-center p-5 m-5 w-{4/5} rounded-md space-x-2.5 > * + *'
        onSubmit={handleSubmit}
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
        <input 
        type='text' 
        name='status' 
        placeholder='Status' 
        value={inputs.status} 
        onChange={handleChange}/>
        <input 
        type='text' 
        name='reward' 
        placeholder='Reward' 
        value={inputs.reward} 
        onChange={handleChange}/>
        <button className=" rounded-md bg-cyan-400 p-1">{props.btnText}</button>
      </form>
    </div>
  )
}