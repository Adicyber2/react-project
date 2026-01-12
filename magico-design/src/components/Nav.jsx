
import Button from './Button'
const Nav = () => {
  return (
    <div className='w-full flex justify-between px-3 py-1 border-b-[1.5px] cursor-pointer ' >
      <div className=' w-[12rem]  flex justify-between items-center'>
        <a className='text-xs border-b-[1.5px] border-transparent hover:border-red-400 '>Services</a>
        <a className='text-xs border-b-[1.5px] border-transparent hover:border-red-400'>Work</a>
        <a className='text-xs border-b-[1.5px] border-transparent hover:border-red-400'>About</a>
      </div>
      <div className='flex items-center'>
        <img src={`${import.meta.env.BASE_URL}image.png`}  className='w-[25px] h-[25px] rounded-full mix-blend-darken ' />
        <h1 className='text-xl  '>Astratto</h1>
      </div>
      <div className='w-[10rem] flex justify-between items-center'>
        <a className='text-xs border-b-[1.5px] border-transparent hover:border-red-400  '>Careers</a>
        <Button text='Contact Us'/>
      </div>
    </div>
  )
}

export default Nav
