import React from 'react'
import Button from './Button'
const Hero = () => {
  return (
    <div className='h-full  px-8 py-10'>
     <div className='w-full flex justify-between'>
       <div className='h-[400px] w-[17%] flex flex-col justify-between '>
        <img className='w-[100%] h-[250px] rounded-b-full -rotate-8 ' src="https://tse4.mm.bing.net/th/id/OIP.hK5MXKHvRjY-W5eUBkqPBQHaNK?pid=Api&P=0&h=180" alt="" />
        <button className='w-fit px-2.5 py-1.5 text-xs font-thin border-[1.5px] rounded-3xl -rotate-10'>Create Magic</button>
      </div>

      <div className='w-[50%] absolute top-25 left-50 '>
        <p className='text-gray-500 text-center'>igniting the Spark of inspiration</p>
        <h1 className='text-6xl  text-center mr-1 '>Unlesash Your <br /> Brand <button>o</button> with Our <br /> <span className='bg-amber-100 text-purple-300 inline-block rotate-2 p-0.5 mt-3 rounded-2xl '>Magico</span> Design</h1>
      </div>

     <div className=' h-[400px]  flex flex-col justify-between'>
       <div className='flex flex-col gap-1 items-end'>
        <h1 className='bg-purple-600 text-white p-1.5 w-fit rounded-2xl'>Via della Creativita. 23</h1>
        <h1 className='bg-purple-600 text-white p-1.5 w-fit rounded-2xl'>20121 Milano</h1>
      </div>
        <img className='w-[100%] h-[250px] rounded-t-full rotate-8 ' src="https://tse4.mm.bing.net/th/id/OIP.hK5MXKHvRjY-W5eUBkqPBQHaNK?pid=Api&P=0&h=180" alt="" />
     </div>
     </div>
    </div>
  )
}

export default Hero
