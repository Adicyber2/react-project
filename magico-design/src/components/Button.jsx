import React from 'react'

const Button = (props) => {
  
  return (
    <div>
      <button className='px-1.5 py-1 text-xs font-thin border-[1.5px] rounded-3xl '>{props.text}</button>
    </div>
  )
}

export default Button
