import React, { useState } from 'react'
import "./style.css"
function AlertCompo1({updateVal,closeAlert,setChoosenPlayer}) {
    let [player,setPlayer]=useState('')
    function handleChange(e)
    {
     setPlayer(e.target.value)
    }

    function handleSubmit(e)
    {
   e.preventDefault()
    updateVal(player)
    setChoosenPlayer(player)
    closeAlert()
    }
  return (
    <div className='alert-container'>
        <p className='alert-msg'>Select Player First !!!</p>
               <form  onSubmit={handleSubmit}>
                <div className='radio-choice-container'>
                <div className='radio-container'>
                <input type="radio" name="choice" style={{width:"1.2rem",height:"1.2rem"}} value='X' required onChange={handleChange}/>
                <label>Player 1 (X)</label>
                </div>
                <div className='radio-container'>
                <input type='radio' name="choice" value='O' required style={{width:"1.2rem",height:"1.2rem"}} onChange={handleChange} /> 
                <label> Player 2 (O)</label>
                </div>
                </div>
                  <button className='btn alert-btn'>OK</button>

        </form>
    </div>
  )
}

export default AlertCompo1