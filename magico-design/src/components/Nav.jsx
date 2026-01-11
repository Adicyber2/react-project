
import Button from './Button'
const Nav = () => {
  return (
    <div className='w-full flex justify-between px-3 py-1 border-b-[1.5px] ' >
      <div className=' w-[12rem]  flex justify-between items-center'>
        <a className='text-xs'>Services</a>
        <a className='text-xs'>Work</a>
        <a className='text-xs'>About</a>
      </div>
      <h1 className='text-xl'>Astratto</h1>
      <div className='w-[10rem] flex justify-between items-center'>
        <a className='text-xs '>Careers</a>
        <Button text='Contact Us'/>
      </div>
    </div>
  )
}

export default Nav
