import React from 'react'
const Cards = (props) => {
  return (
    <div className='Card-container' style={{height:""}}>
    <h3 > {props.Name}</h3> 
    <p> {props.Discription}</p>
    </div>
  )
}

export default Cards
