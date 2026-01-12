import React from 'react'

const Button = (props) => {
  
  return (
    <div>
      <button className='px-1.5 py-1 text-xs font-bold border-[1.5px] rounded-3xl hover:bg-emerald-500 '>{props.text}</button>
    </div>
  )
}

export default Button
