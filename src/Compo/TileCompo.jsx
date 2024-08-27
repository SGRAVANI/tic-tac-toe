import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
function TileCompo({val,updateVal,updateRes,ind,res,f,updateFlag,setAlert,choosenPlayer,id,setWinCoord}) {

//  let tileRef=useRef(null)
  


// useEffect(()=>{
// console.log(winCoord)
// },[winCoord])

function handleMove(e)
  {
   
    console.log(f,"from event",e.target.innerText,e.target.clientHeight,e.target.clientWidth,e.target.offsetWidth,e.target.offsetHeight)
    console.dir(e.target)
   if(val==' ')
   {
    //alert("select player first")
    setAlert(true)
    return
   }
   if(f!=false)
   {
    return
   }
    //if(tileRef.curr!='X' && tileRef.current.textContent!='O' )
    if(e.target.innerText!='X' && e.target.innerText!='O' )
{  //e.target.innerText=val;
 // updateVal()
  
 let r= updateRes(val,ind)
// console.log(r)
  let status=checkWin(r,val)
  if(status)
  {//console.log("coordinates are: ",winCoord)
    setTimeout(()=>{
      console.log(status )
      updateFlag(status)
    
    },500)
    
  return
  }


  while(true)
  {
    let i=Math.floor(Math.random()*9)
    let newVal;
    newVal=val=='X'?'O':'X'
    //newVal.color=val.color=="red"?'blue':"red"
    //console.log(newVal,i)
    if(res[i]==' ' && i!=ind)
    {
      
     
      setTimeout(()=>{
      //update value here  for current player
      let r= updateRes(newVal,i)
      let status=checkWin(r,newVal)
      //updateVal()
      console.log(r)

      if(status)
        {//console.log("coordinates are : ",winCoord)
          setTimeout(()=>{
            updateFlag(status)
            console.log(status)
          },500)
        
        return
        }
         
        
      },[400])
     
      
      break;
    }
  }
}

//console.log(res[0]==res[4]==res[8])



  }
  function getCooard(res)
  {
    if(res[0]==res[1] && res[1]==res[2] && res[0]!=' ' )
    {
      return {start:0,end:2}
      //return {width:}
    }
    else if(res[0]==res[4] && res[4]==res[8] && res[0]!=' '){
     return {start:0,end:8}
    }
    else if (res[2]==res[4] && res[4]==res[6] && res[2]!=' '){
       return {start:6,end:2}
    }
    else if(res[3]==res[4] && res[4]==res[5] && res[3]!=' '){
      return {start:3,end:5}
    }
    else if (res[6]==res[7] && res[7]==res[8] && res[6]!=' '){
      return {start:6,end:8}
    }
    else if(res[0]==res[3] && res[3]==res[6] && res[0]!=' '){
      return {start:0,end:6}
    }
   else if (res[1]==res[4] && res[4]==res[7] && res[1]!=' '){
    return {start:1,end:7}
   }
    else if (res[2]==res[5] && res[5]==res[8] && res[2]!=' '){
      return {start:2,end:8}
    }
  }
  function checkWin(res,val)
  {
    if((res[0]==res[1] && res[1]==res[2] && res[0]!=' ' )||
    (res[0]==res[4] && res[4]==res[8] && res[0]!=' ')||
    (res[2]==res[4] && res[4]==res[6] && res[2]!=' ')||
    (res[3]==res[4] && res[4]==res[5] && res[3]!=' ')||
    (res[6]==res[7] && res[7]==res[8] && res[6]!=' ')||
    (res[0]==res[3] && res[3]==res[6] && res[0]!=' ')||
    (res[1]==res[4] && res[4]==res[7] && res[1]!=' ')||
    (res[2]==res[5] && res[5]==res[8] && res[2]!=' '))
      {
        let coord=getCooard(res)
        console.log(coord)
        setWinCoord(coord)
        if(val==choosenPlayer)
        {
          return "You Won..."
        }
        else {
          return "Game Over"
        }
       
        
      }
       if(res[0]!=' ' && res[1]!=' '&& res[2]!=' ' && res[3]!=' '&& res[4]!=' ' && res[5]!=' ' && res[6]!=' ' && res[7]!=' '&& res[8]!=' ' ){
          return "Draw..."
        }
       return undefined 
      }
  
  return (
    
    <div id={id} className='tile' onClick={handleMove} style={{color:res[ind]!=' ' && res[ind]=='X'?"red":res[ind]!=' '&& res[ind]=='O'?"navy":""}} > {res[ind]}
    
       </div>
    
    
  )
  
}

export default TileCompo