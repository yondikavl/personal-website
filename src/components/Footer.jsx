import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='w-screen mt-24 pb-8 px-4 lg:px-40 text-white'>
                <div className='p-[0.025rem] bg-gray-600'></div>
                <div className='flex flex-row justify-between mt-12 flex-wrap text-left items-center'>
                    <div className='my-2 lg:my-0 w-80'>
                        <p className=''>&copy;2023 HiYondika. All Right Reserved.</p>
                    </div>
                    <div className='my-2 lg:text-center lg:my-0 w-80'>
                        <p className=''>yondikaviolanda@gmail.com</p>
                    </div>
                    <div className='flex text-center lg:justify-end my-2 lg:my-0 w-80'>
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
            </div>
        </div>
    );
};

export default Footer;
