import React, { useEffect, useState,useRef } from 'react'
import "./style.css"
import TileCompo from './TileCompo'
import AlertCompo1 from './AlertCompo1'
import AlertWinLoose from './AlertWinLoose'
function LayOut() {
    let [curPlayer,setCurPlayer]=useState(' ')
    let [res,setRes]=useState(new Array(9).fill(' '))
    let [f,setF]=useState(false)
    let [alert,setAlert]=useState(false)
    let lineRef=useRef(null)
    let [choosenPlayer,setChoosenPlayer]=useState('')
    let [winCoord,setWinCoord]=useState(null)
    let [displayWinAlert,setDisplayWinAlert]=useState(false)
    //let [alertWin,setAlertWin]=useState(false)
    //let [alertLoose,setAlertLoose]=useState(false)
    
    useEffect(()=>{
     console.log(lineRef.current.offsetTop,lineRef.current.offsetLeft,lineRef.current.offsetRight,lineRef.current.offsetBottom)
     
    },[])
    useEffect(()=>{
      setTimeout(()=>{
        if(f)
          {
          setDisplayWinAlert(true)
          }
      },1500)
     
    },[f])
    

    function getLineStyle()
    {
      let begin=document.getElementById(`tile-${Number(winCoord.start)+1}`)
      let end=document.getElementById(`tile-${Number(winCoord.end)+1}`)
      console.log(begin,end)
      let startPosition=begin.getBoundingClientRect()
      let endPosition=end.getBoundingClientRect()
      let startCenterX=startPosition.x;
      let startCenterY=startPosition.y
      let endCenterX=endPosition.x;
      let endCenterY=endPosition.y;
      // let lineLength=Math.sqrt((endCenterX*endCenterX-startCenterX*startCenterX)+(endCenterY*endCenterY-startCenterY*startCenterY))
      let lineLength = Math.sqrt((endCenterX - startCenterX) ** 2 + (endCenterY - startCenterY) ** 2);
      console.log("line length",lineLength)
      let angle=Math.atan2(endPosition.y-startPosition.y,endPosition.x-startPosition.x)*(180/Math.PI);
      return {
        width:`${lineLength}px`,
        top:`${startCenterY+(startPosition.height/2)}px`,
        left:`${startCenterX+(startPosition.width/2)}px`,
        // top:`${startCenterY}px`,
        // left:`${startCenterX}px`,
        transformOrigin: '0 0',
        transform:`rotate(${angle}deg)`
      }
    }
    //  useEffect(()=>{
  //   console.log(res)
    // if((res[0]==res[1] && res[1]==res[2] && res[0]!=undefined )||(res[0]==res[4] && res[4]==res[8] && res[0]!=undefined)||(res[2]==res[4] && res[4]==res[6] && res[2]!=undefined)||(res[3]==res[4] && res[4]==res[5] && res[3]!=undefined)||(res[6]==res[7] && res[7]==res[8]&&res[6]!=undefined))
    //   {
    //     console.log("win")
        
    //   }
      
  //  },[res])    
    
useEffect(()=>{
  console.log(curPlayer)
})    

function closeAlert()
{
  setAlert(false)
}


    function updateRes(val,ind)
    {
      
    let arr=[...res]
    arr[ind]=val
    setRes((prev)=>{
      let arr=[...prev]
      arr[ind]=val;
      return arr
    })
      return arr;
    //res[ind]=val
    }
  function updateVal(val)
  {
    setCurPlayer(val)
    
  }
    function handleX()
  {
    setChoosenPlayer('X')
   setCurPlayer('X')
  }
  function handleO()
  {setChoosenPlayer('O')
  setCurPlayer('O')
  }
  function updateFlag(val)
  {
  setF(val)
  }
  
  function restart()
  {
    setRes((prev)=>{
      return new Array(9).fill(' ')
    })
    setCurPlayer(' ')
   
    
    //setAlertWin(false)
    setChoosenPlayer('')
    
    setF(false)
    setDisplayWinAlert(false)
    console.log(res)

  }
  function generateTiles()
  {
    let r=[]
    for(let i=0;i<9;i++)
    {
        // <div className='tile' id={`tile${i}`}  key= {`tile${i}`}onClick={handleMove}>&nbsp; </div>
        r.push(<TileCompo  key= {`tile${i}`} val={curPlayer} updateVal={updateVal} ind={i} updateRes={updateRes}
        res={res} f={f} updateFlag={updateFlag}  setAlert={setAlert} choosenPlayer={choosenPlayer} id={`tile-${i+1}`} setWinCoord={setWinCoord}
        /> )
    }
    return r;
  }
    return (
    <div style={{backgroundColor:"black",position:"fixed",top:"0",left:"0",width:"100%",height:"100vh"}}>
    <div style={{marginTop:"10rem",margin:"0 auto"}}>
    
    <div className='choice-section'>
    <p style={{color:"white"}}>Select any one player by clicking below button</p>
   <div className='choice-btns'>
   <button onClick={handleX} className='btn btn-cross'  autoFocus={curPlayer=='O'?true:false} disabled={choosenPlayer=='O'}>{curPlayer==' ' ?"Player 1(X)":curPlayer=='X'?"You (X)":"Player-2 (X)"}</button>
   <button onClick={handleO} className='btn btn-o' autoFocus={curPlayer=='X'?true:false} disabled={choosenPlayer=='X'}>{curPlayer==' ' ?"Player 2(O)":curPlayer=='O'?"You (O)":"Player-2 (O)"}</button>
   </div>
   </div>

   <div className='container' ref={lineRef}>
   {/* <div className='tile' onClick={handleMove}>&nbsp; </div>
   <div className='tile'onClick={handleMove}>&nbsp;</div>
   <div className='tile'onClick={handleMove}>&nbsp; </div>
   <div className='tile'onClick={handleMove}> &nbsp;</div>
   <div className='tile'onClick={handleMove}>&nbsp;</div>
   <div className='tile' onClick={handleMove}>&nbsp; </div>
   <div className='tile' onClick={handleMove}>&nbsp; </div>
   <div className='tile' onClick={handleMove}>&nbsp; </div>
   <div className='tile' onClick={handleMove}>&nbsp; </div> */}
    {generateTiles()}
   </div>
  
    </div>
     {alert &&<AlertCompo1 updateVal={updateVal} closeAlert={closeAlert} setChoosenPlayer={setChoosenPlayer} />}
     {f && f!='Draw...' &&<div style={getLineStyle()} className='line'></div>}
    {displayWinAlert && <AlertWinLoose restart={restart} text={f}  />}
    </div>
  )
}

export default LayOut