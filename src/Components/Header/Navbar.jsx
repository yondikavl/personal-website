import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram, FaDribbble} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className='pt-8 pb-4 px-4 lg:px-40 fixed top-0 z-50 w-screen bg-[#0e1111] text-white'>
        <div className='flex justify-between'>
          <ul className='flex lg:w-60 justify-start items-center'>
            <li className='mr-2'>
              <button className='text-sm p-2 rounded-lg'>WORKS</button>
            </li>
            <li className='mx-2'>
              <button className='text-sm p-2 rounded-lg'>CONTACT</button>
            </li>
          </ul>
          <div className='w-screen flex justify-end md:mx-2 lg:w-60'>
            <h2 className='text-lg p-1 font-bold'>HiYondika</h2>
          </div>
          <div className='hidden lg:flex items-center mx-2 lg:w-60 justify-end'>
            <a className='mx-2 p-[0.78rem] rounded-lg' href='https://github.com/yondikavl' target='_blank'>
              <FaGithub/>
            </a>
            <a className='mx-2 p-[0.78rem] rounded-lg' href='https://linked.in/yondika-vio-landa' target='_blank'>
              <FaLinkedin/>
            </a>
            <a className='mx-2 p-[0.78rem] rounded-lg' href='https://instagram.com/yondikavl_' target='_blank'>
              <FaInstagram/>
            </a>
            <a className='mx-2 p-[0.78rem] rounded-lg' href='' target='_blank'>
              <FaDribbble/>
            </a>
          </div>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar
