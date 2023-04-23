import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram, FaDribbble} from 'react-icons/fa'

function Footer() {
  return (
    <div className='Footer'>
        <div className='mt-24 pb-8 px-8 lg:px-40 text-white'>
          <div className='p-[0.025rem] bg-gray-600'></div>
          <div className='flex flex-row justify-between mt-12 flex-wrap text-left'>
            <div className='mx-2 my-2 lg:my-0'>
              <p className=''>&copy;2023 HiYondika. All Right Reserved.</p>
            </div>
            <div className='mx-2 my-2 lg:my-0'>
              <p className=''>Yondikaviolanda@gmail.com</p>
            </div>
            <div className='flex items-center my-2 lg:my-0'>
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
        </div>
    </div>
  )
}

export default Footer