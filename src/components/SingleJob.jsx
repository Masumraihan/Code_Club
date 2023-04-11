import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    fulltime_or_parttime,
    remote_or_onsite,
    salary,
    location,
  } = job;
  return (
    <div className='border border-gray-200 rounded flex items-center p-8 gap-8 flex-wrap'>
      <img className="w-36" src={company_logo} alt={company_name} />
      <div>
        <h3 className='text-2xl font-bold'>{job_title}</h3>
        <h4 className='text-2xl font-semibold'>{company_name}</h4>
        <div className='py-6'>
          <span className=' border text-brand font-semibold rounded border-[#7E90FE] py-2 px-6'>
            {remote_or_onsite}
          </span>
          <span className='border text-brand font-semibold rounded border-[#7E90FE] py-2 px-6 ml-8'>
            {fulltime_or_parttime}
          </span>
        </div>
        <div className='flex items-center gap-6 pt-4 pb-6'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-brand'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>
            <p className='text-xl'>{location}</p>
          </div>
          <div className='flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-brand'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <p className='text-xl'>Salary: {salary}</p>
          </div>
        </div>
      </div>
      <div className="md:ml-auto">
        <Link to={`/details/${id}`}>
          <button className='btn-primary'>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleJob;
