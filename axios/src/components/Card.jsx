import React from 'react'

const Card = (props) => {
 
  
  return (
     <div class='card'>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <div className=" lower">
        <button>Buy Now</button>
        <span>{props.price}</span>
      </div>
    </div>

  )
}

export default Card

