import React from 'react'
import { useState } from 'react'

const Players = ({icono , iconx,playground,open,MODE}) => {
  const [mode,setmode] = useState("")
  return (
  <>
  
  
  <div className="headericon">
            <img src= {icono} alt="" className='topicon' />
            <img src={iconx} alt=""  className='topicon' />
        </div>
        <div className="playertype">
            <div className="playerchoice">
            <div className="choicebtn">
<button id='x'className='butn' onClick={() => open("x")}> <img src= {icono} alt="" className='powerbtn' /></button>
<button id='o'className='butn'  onClick={() => open("o")}>   <img src={iconx} alt=""className='powerbtn'/></button>

</div>
            </div>

        </div>
      
<div className="versus">

<button id="cpu"    className='vsbtn' onClick={()=>playground("firstpage","CPU")}>NEW GAME VS(CPU)</button>
<button id="player" className='vsbtn'onClick={()=>  playground("firstpage","")}> NEW GAME VS (PLAYER)</button>

</div>
  
  
  
  </>
  )
}

export default Players
