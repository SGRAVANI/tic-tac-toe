import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayOut from './Compo/LayOut'
import AlertCompo1 from './Compo/AlertCompo1'
import AlertWinLoose from './Compo/AlertWinLoose'


function App() {


  return (
    <>
      <div>
        <LayOut/>
       {/* <AlertWinLoose/> */}
       </div>
    </>
  )
}

export default App
