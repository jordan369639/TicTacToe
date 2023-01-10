import React from 'react'
import TicTac from './TicTac'

import { useState } from 'react'
import Scorebord from './Scorebord'
import Result from './Result'
import { useEffect } from 'react'
import { useRef } from 'react'
let arr = [];

const Bord = ({icono,iconx,playground,mode,choice}) => {

const [state,setState] = useState(Array(9).fill(null))
const [player,setplayer] = useState(choice == "o" ? false:true);
const[icon,seticon]= useState(Array(9).fill(null));
const[cindex,setindex]= useState(Array(9).fill(null));
const [win ,setwin] = useState(0);
const xwin = useRef(0);
const owin = useRef(0);
const twin = useRef(0);

const checkWinner = ()=>{

const winnerLogic = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]




]


for(let arr of  winnerLogic){

let [a,b,c] = arr;
if( state[a] != null && state[a] === state[b] && state[b] === state[c]){


// arr[0] = a;
// arr[1] = b;
// arr[2] = c;
// let box = Array.from(document.getElementsByClassName("box"));
// box.forEach((elem,i)=>{

// if(elem.id == arr[0] || elem.id == arr[1]||elem.id == arr[2]){
//   elem.style.background = "red"
// }

// })

    return state[a];
}



}

return false;
}




const placebet = (index)=>{
  if(state[index] == null){
    let  copystate = [...state];
    if(choice == "o" && mode == "CPU"){

      copystate[index] ="O";
      icon[index] = <i className="fa-solid fa-o" id='O'></i>
    }else{
      copystate[index] =player ? "x":"O"
      icon[index] = player ? <i className="fa-solid fa-x" id="X"></i>:<i className="fa-solid fa-o" id='O'></i>
    }
   
    setState(copystate);
    let  indexstate = [...cindex] 
    indexstate[index] = index;
    setindex(indexstate);
    arr.push(index);
    setwin(win +1);
    setplayer(!player);
 
  }
  
  
    
   
}



let winner = checkWinner();


if(win > 8 && winner == false){
  winner = "TIE";
}

 if(player == false && mode == "CPU"){
setTimeout(() => {
  let find = [];


 for(let i =0;i<9;i++){
if(!arr.includes(i)){
find.push(i);

}

 }

 let index = Math.floor(Math.random()*find.length);
let val = find[index];
if(choice == "o"){

  icon[val] = <i className="fa-solid fa-x" id='X'></i>;
}else{
  icon[val] = <i className="fa-solid fa-o" id='O'></i>;

}
arr.push(val);
setwin(win +1);
let cstate = [...state];
if(choice == "o"){
  
  cstate[val] = "x";
}else{
  cstate[val] = "O";
  
}
setState(cstate);


setplayer(!player);
}, 1000);

 }




const resetbord = ()=>{
  setState(Array(9).fill(null));
  seticon(Array(9).fill(null));
  setwin(0);
  
 
}






const reset = ()=>{

 setState(Array(9).fill(null));
//  setplayer(true);
 seticon(Array(9).fill(null));
 setwin(0);
 arr = [];
if(winner == "x"){
  xwin.current++;
}else if(winner == "TIE"){
  twin.current++;
}else if(winner == "O"){
  owin.current++;
}
if(choice == "o" && mode == "CPU" ){
  setplayer(false);
}else{
  setplayer(true);
  
}

}


  return (
  
   
    <>
    <div className="main">



{ winner || win >8  ? <><Result reset={reset} winner={winner == "TIE" ? "TIE":winner == "x" ?<i className="fa-solid fa-x"></i>:<i className="fa-solid fa-o" ></i> } playground={playground}/></>:

<>
<nav id='topnavbar'>
<div className="icon">
  <img src={iconx} alt="X"className='headicons'/>
  <img src={icono}alt="O" className='headicons'/>
</div>
<button id='turn'> {choice == "o"  ? !player ? "X":"O":player ? "X":"O"} TURN</button>
<button  id="reset" onClick={()=> resetbord()}><i className="fa-solid fa-rotate-right"></i></button>
</nav>

<div className="rows" >
    <TicTac onClick={() => placebet(0)} value={icon[0]} id={"0"}/>
    <TicTac onClick={() => placebet(1)} value={icon[1]}  id={"1"}/>
    <TicTac onClick={() => placebet(2)} value={icon[2]} id={"2"}/>
</div>
<div className="rows">
<TicTac onClick={() =>placebet(3)} value={icon[3]} id={"3"}/>
<TicTac onClick={() =>placebet(4)} value={icon[4]} id={"4"}/>
<TicTac onClick={() =>placebet(5)} value={icon[5]} id={"5"}/>

</div>
<div className="rows">
<TicTac onClick={() =>placebet(6)} value={icon[6]} id={"6"}/>
<TicTac onClick={() =>placebet(7)} value={icon[7]} id={"7"}/>
<TicTac onClick={() =>placebet(8)} value={icon[8]} id={"8"}/>
</div>

<div className="rows">

<Scorebord xwin={xwin} owin={owin} twin={twin} mode={mode}/>

</div>

</>
}

    </div>
      
    </>
  )
}

export default Bord
