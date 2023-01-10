import React from 'react'
import sty from "./style.css"
const Result = ({reset,winner,playground}) => {
 
  return (
    <>
      <div className="result">
{
  winner == "TIE" ? <>
  
  <header id='winner' style={{left:"1.5rem"}}>TIE</header>
<div className="resetbtn">
<button id='quit' onClick={()=> playground("secondpage")}>QUIT</button>
<button id='nextround' onClick={()=> reset()}>NEXT ROUND</button>

</div>
  </>:


  <>
<header id='winner'>PLAYER  {winner}  WON</header>
<div className="resetbtn">
<button id='quit' onClick={()=> playground("secondpage")}>QUIT</button>
<button id='nextround' onClick={()=> reset()}>NEXT ROUND</button>

</div>
</>

}
      </div>
    </>
  )
}

export default Result
