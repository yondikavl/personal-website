import React from 'react';

const Portfolio = ({ image, title, desc }) => {
    return (
        <div className={'lg:my-0 my-4'}>
            <img data-aos='zoom-in' data-aos-duration='1500' src={image} className='rounded-xl md:w-96' />
            <p data-aos='zoom-in' data-aos-duration='1500' className='mt-4 text-sm text-gray-400'>
                {title}
            </p>
            <p data-aos='zoom-in' data-aos-duration='1500' className=''>
                {desc}
            </p>
        </div>
    );
};

export default Portfolio;
