import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <div className='Navbar'>
            <nav className='pt-8 pb-4 px-6 md:px-40 fixed top-0 z-50 w-screen text-white backdrop-blur-sm shadow-lg'>
                <div className='flex justify-between'>
                    <div className='flex lg:w-60 justify-start items-center'>
                        <div className={'text-sm bg-white/[.09] mr-4 p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>WORKS</div>
                        <div className={'text-sm bg-white/[.09] p-2 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>CONTACT</div>
                    </div>
                    <div className='flex justify-end lg:justify-center lg:w-60 items-center'>
                        <div className={'p-2 text-xl font-bold'}>HiYondika</div>
                    </div>
                    <div className='hidden lg:flex items-center lg:w-60 justify-end'>
                        <div className={'bg-white/[.09] p-[0.68rem] mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>
                            <FaGithub />
                        </div>
                        <div className={'bg-white/[.09] p-[0.68rem] mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>
                            <FaLinkedin />
                        </div>
                        <div className={'bg-white/[.09] p-[0.68rem] mr-4 rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>
                            <FaInstagram />
                        </div>
                        <div className={'bg-white/[.09] p-[0.68rem] rounded-lg border-[1px] border-white/[.3] hover:bg-white/[0.2] '}>
                            <FaDribbble />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
