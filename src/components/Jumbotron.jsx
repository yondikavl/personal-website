import React from 'react';
import Typed from 'typed.js';

const Jumbotron = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Developer', 'Designer'],
            typeSpeed: 150,
            backSpeed: 150,
            smartBackspace: true,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section className='Hero'>
            <div className='w-screen h-screen my-32 lg:my-0 px-6 md:px-40 flex flex-col lg:flex-row items-center justify-between text-white'>
                <div className='w-screen lg:w-40 px-6 lg:px-0 text-left flex lg:block justify-between flex-wrap lg:flex-nowrap'>
                    <div className='mt-4 lg:mt-0 md:w-40'>
                        <h3 data-aos='fade-right' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            BIOGRAPHY
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-xs lg:text-base'>
                            Work for money and Develop for love
                        </p>
                    </div>
                    <div className='mt-4 lg:mt-12 md:w-40'>
                        <h3 data-aos='fade-right' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            SERVICE
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-xs lg:text-base'>
                            Web Development
                        </p>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-xs lg:text-base'>
                            Web Design
                        </p>
                    </div>
                    <div className='mt-4 lg:mt-12 md:w-40'>
                        <h3 data-aos='fade-right' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            CONTACT
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-xs lg:text-base'>
                            Lampung, Indonesia
                        </p>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-xs lg:text-base'>
                            yondikaviolanda@gmail.com
                        </p>
                    </div>
                </div>

                <div className='text-center mt-20 lg:mt-0'>
                    <h1 data-aos='zoom-in' data-aos-duration='2500' className='text-4xl lg:text-8xl font-bold'>
                        Yondika Vio Landa
                    </h1>
                    <h1 data-aos='zoom-out' data-aos-duration='2500' className='text-4xl lg:text-8xl font-bold'>
                        Web <span className='typing-text' ref={el}></span>
                    </h1>
                    <h1 data-aos='zoom-in' data-aos-duration='2500' className='text-4xl lg:text-8xl font-bold'>
                        Based in Indonesia
                    </h1>
                </div>

                {/* <div className='mt-8 lg:mt-0'>
            <img data-aos="fade-down" 
              data-aos-duration="1500" 
              className='w-80 lg:w-96 bg-gray-100 rounded-full' 
              src={GambarHeader} alt='' />
          </div> */}

                <div className='w-screen lg:w-40 px-8 lg:px-0 mt-20 lg:mt-0 text-center lg:text-right flex lg:block justify-between flex-wrap lg:flex-nowrap'>
                    <div className='w-28 lg:w-40'>
                        <h3 data-aos='fade-left' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            YEAR OF EXPERIENCE
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-3xl lg:text-5xl'>
                            2
                        </p>
                    </div>
                    <div className='lg:mt-12 w-28 lg:w-40'>
                        <h3 data-aos='fade-left' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            CLIENT ON WORLDWIDE
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-3xl lg:text-5xl'>
                            + 99
                        </p>
                    </div>
                    <div className='lg:mt-12 w-28 lg:w-40'>
                        <h3 data-aos='fade-left' data-aos-duration='1500' className='text-xs lg:text-sm lg:mb-2 text-gray-400'>
                            PROJECT DONE
                        </h3>
                        <p data-aos='zoom-in' data-aos-duration='1500' className='text-3xl lg:text-5xl'>
                            999
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Jumbotron;
