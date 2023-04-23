import React from 'react'

function Portfolio() {
  return (
    <div className='Portfolio'>
        <div className='my-24 px-8 lg:px-40 text-white'>
          <div data-aos="zoom-in" 
            data-aos-duration="2500"
            className='p-[0.025rem] bg-gray-600'></div>
          <h2 className='text-xl lg:text-2xl mt-12 font-bold lg:mt-24 text-center'>My Latest Projects</h2>
          <div className='flex flex-row lg:justify-between mt-12 lg:mt-24 flex-wrap text-left justify-center'>
            <div className='mx-2 lg:my-0 my-4'>
              <div data-aos="zoom-in" 
                data-aos-duration="1500"
                className='p-44 lg:p-48 bg-red-300'></div>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm text-gray-400'>Web Design</p>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className=''>Lorem Ipsum Dummy Project</p>
            </div>
            <div className='mx-2 lg:my-0 my-4'>
              <div data-aos="zoom-in" 
                data-aos-duration="1500"
                className='p-44 lg:p-48 bg-lime-300'></div>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className='mt-4 text-sm text-gray-400'>Mobile App Design</p>
              <p data-aos="zoom-in" 
                data-aos-duration="1500"
                className=''>Lorem Ipsum Dummy Project</p>
            </div>
            <div className='mx-2 lg:my-0 my-4'>
              <div data-aos="zoom-in" 
                data-aos-duration="1500"
                className='p-44 lg:p-48 bg-sky-300'></div>
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