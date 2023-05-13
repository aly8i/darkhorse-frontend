import React from 'react'
import Typewriter from 'typewriter-effect'
import "./Animation1.css"
const Animation1 = () => {
  return (
    <div class="container">
        <Typewriter options={{ autoStart:true,loop:true,delay:50,strings:["Bet on your favorite dark horse"]}}/>
    </div>
  )
}

export default Animation1