import React from 'react'
import { useState } from 'react'
import iconx from "../images/icons/icon-o-black.svg"
import icono from "../images/icons/icon-x-black.svg"
import Bord from './Bord'
import Choice from './Choice'
import Players from './Players'
import style from "./style.css"
import TicTac from './TicTac'

 const Game = () => {
  const [choice, setchoice] = useState("x");
  const [first,setpage] = useState("secondpage");
  const [mode,setmode] = useState("")


  const open = (ch) => {
    setchoice(ch);
let a = document.getElementById(ch).parentElement;

if(ch == "x"){
  a.style.setProperty('--left','1rem');
}else if(ch == "o"){
  a.style.setProperty('--left','12rem');
 
}

   


  }
  const playground = (page,type) => {
  
    setpage(page);
    setmode(type);
   if(page == "secondpage"){
    window.location.reload()
   }


  }



  return (


    <div className="Homepage">
{

first === "firstpage" &&  <Bord icono={icono} iconx={iconx} playground={playground} mode={mode} choice={choice}/>


}
     
{

first === "secondpage" && <Players playground={playground} icono={icono} iconx={iconx} open={open} />

}



    </div>
  )
}

export default Game


