import Nav from './Nav'
import Button from './Button'
import Section2 from './Section2'
const Hero = () => {
  return (
    <div >
      <div className='px-10' style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}eaea1757-30ca-40e7-8d96-b80d88c54816.jpg)`
  }}>
      <Nav/>
       <div className="w-full flex justify-between h-full  px-8 py-10 "  >
       <div className='h-[400px] w-[17%] flex flex-col justify-between '>
        <div className='w-[200px] h-[250px] rounded-b-full -rotate-8 bg-red-300 overflow-hidden '>
          <img className='w-full h-full object-cover ' src="https://i.pinimg.com/1200x/d0/fd/68/d0fd686d9f97f4c8ee97e6f722f06ccc.jpg" alt="" />
        </div>
        
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
        <img className='w-[200px] h-[250px] rounded-t-full rotate-8 ' src="https://i.pinimg.com/736x/18/66/e5/1866e5596be3cae2ef08cba7f3fc7bd9.jpg" alt="" />
     </div>
     
     </div>
     <Section2/>
     </div>
      
    </div>
    

  )
}

export default Hero
