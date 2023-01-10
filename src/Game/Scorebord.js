
const Scorebord = ({xwin,owin,twin,mode}) => {


  return (
    <>
      <div className="scorebord">

       <div className="score" id='player1'>
<p> (player 1)</p>
<span>{xwin.current}</span>
       </div>
       <div className="score" id='tie'>
       <p> (TIE)</p>
       <span>{twin.current}</span>
       </div>
       <div className="score" id='player2'>
       <p> {mode == "CPU" ? "CPU":"player 2"}</p>
       <span>{owin.current}</span>
       </div>

      </div>
    </>
  )
}

export default Scorebord
