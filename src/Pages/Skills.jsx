import React from 'react'
import HtmlLogo from '../assets/images/html-5-logo.svg'
import JSLogo from '../assets/images/javascript-logo.svg'
import Bootstrap from '../assets/images/bootstrap-logo.svg'
import TailwindCSS from '../assets/images/tailwindcss-logo.svg'
import Figma from '../assets/images/figma-logo.svg'
import ReactLogo from '../assets/images/react-logo.svg'

function Skills() {
  return (
    <div className='Skills'>
        <div className='my-24 px-8 lg:px-40 text-white'>
          <div data-aos="zoom-in" 
              data-aos-duration="2500"
              className='p-[0.025rem] bg-gray-600'></div>
          <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center'>My Advantage</h2>
          <div className='flex flex-row justify-around mt-12 lg:my-24 flex-wrap text-center'>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={HtmlLogo} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>HTML5/CSS</p>
            </div>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={Bootstrap} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>Bootstrap</p>
            </div>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={TailwindCSS} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>Tailwindcss</p>
            </div>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={JSLogo} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>JavaScript</p>
            </div>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={ReactLogo} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>React</p>
            </div>
            <div className='mx-2 my-4 lg:my-0'>
              <img data-aos="zoom-in" 
                data-aos-duration="1500"
                src={Figma} className='w-24 p-4 rounded-xl' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm'>Figma</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills
