import React from 'react'
import portofolio1 from '../assets/images/port-1.png'
import portofolio2 from '../assets/images/port-2.png'
import portofolio3 from '../assets/images/port-3.png'

function Portfolio() {
  return (
    <div className='Portfolio'>
        <div className='my-24 mx-4 lg:mx-40 text-white'>
          <div data-aos="zoom-in" 
            data-aos-duration="2500"
            className='p-[0.025rem] bg-gray-600'></div>
          <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center'>My Latest Projects</h2>
          <div className='flex flex-row lg:justify-between mt-12 lg:mt-24 flex-wrap text-left justify-center'>
            <div className='mx-2 lg:my-0 my-4'>
              <img src={portofolio1} className='p-8 rounded-lg md:w-80' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm text-gray-400'>Web Design</p>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className=''>Lorem Ipsum Dummy Project</p>
            </div>
            <div className='mx-2 lg:my-0 my-4'>
              <img src={portofolio2} className='p-8 rounded-lg lg:w-80' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm text-gray-400'>Mobile App Design</p>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className=''>Lorem Ipsum Dummy Project</p>
            </div>
            <div className='mx-2 lg:my-0 my-4'>
              <img src={portofolio3} className='p-8 rounded-lg lg:w-80' />
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm text-gray-400'>Web Development</p>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className=''>Lorem Ipsum Dummy Project</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio