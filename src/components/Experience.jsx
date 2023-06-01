import React from 'react';

const Experience = ({ children }) => {
    return <div className={'w-40 lg:w-60 mt-4 md:mt-0'}>{children}</div>;
};

const Years = ({ children }) => {
    return (
        <h3 data-aos='fade-left' data-aos-duration='1500' className={'text-xs text-gray-400 lg:text-base'}>
            {children}
        </h3>
    );
};

const Desc = ({ position, organization }) => {
    return (
        <>
            <p data-aos='zoom-in' data-aos-duration='1500' className={'mt-4 text-sm lg:text-base'}>
                {position}
            </p>
            <p data-aos='zoom-in' data-aos-duration='1500' className={'text-xs text-gray-400 lg:text-sm'}>
                {organization}
            </p>
        </>
    );
};

Experience.Years = Years;
Experience.Desc = Desc;

export default Experience;
