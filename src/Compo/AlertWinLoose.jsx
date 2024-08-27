import React from 'react'
import "./style.css"
function AlertWinLoose({restart,text}) {
    // if(text=='You Won...')
    // {
    //     return ''
    // }
  return (
    <div className={text=="You Won..."||"Draw..."?'alert-win-parent':"alert-loose-parent"}>  
          <div className='alert-container-win-loose alert-win'>
        <div className='alert-win-loose alert-win-inner'>
         <div  className={text=="Game Over"?"alert-winer-text bungee-tint-regular":"alert-winer-text bungee-spice-regular"} >{text}</div>
         
    {/* <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>  */}
                 <button className='btn btn-o' onClick={()=>{restart()}}>Restart</button>
    {/* </div> */}

    </div>
    
    </div>
    </div>

  )
}

export default AlertWinLoose