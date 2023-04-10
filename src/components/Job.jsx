import React from 'react';

const Job = ({job}) => {
    const {logo,name,jobs_available} = job
    return (
        <div className='bg-[rgba(126,144,254,0.05)] p-14 rounded-lg flex flex-col items-center md:items-start'>
            <img className='w-16 h-16' src={logo} alt="" />
            <h4 className='text-xl font-extrabold mt-8 mb-2'>{name}</h4>
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Job;