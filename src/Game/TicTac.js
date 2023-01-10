import React from 'react'

const TicTac = (props) => {

  return (
    <>
      <div className="box" 
      onClick={ props.onClick} id={props.id}>
        <h3>{props.value}</h3>
      </div>
    </>
  )
}

export default TicTac
