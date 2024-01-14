import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] =useState(false)

   const handleNav = () => {
    setNav(!nav)
   }


  return (
    <div className='text-white h-24 max-w-[1240px] mx-auto px-4 flex justify-between items-center' >
        <h1 className='text-3xl w-full font-bold text-[#00df9a]'>REACT.</h1>
         <ul className='hidden md:flex '>
            <li className='p-4'>Home</li>
            <li  className='p-4'>Company</li>
            <li  className='p-4'>Resources</li>
            <li  className='p-4'>About</li>
            <li  className='p-4'>Contact</li>
         </ul>
         <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> :  < AiOutlineMenu size={30}/>}
           
         </div>
         <div className={!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full  border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
         <h1 className='text-3xl w-full font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='pt-12  uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li  className='p-4 border-b border-gray-600'>Company</li>
            <li  className='p-4 border-b border-gray-600'>Resources</li>
            <li  className='p-4 border-b border-gray-600'>About</li>
            <li  className='p-4'>Contact</li>
            </ul>
         </div>
    </div>
  )
}

export default Navbar