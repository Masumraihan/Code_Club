import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToLocal } from "./DbFunctions/dbFunctions";

const Details = () => {
  const [job, setJob] = useState({});
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    email,
    phone,
    location,
  } = job;
  const { jobId } = useParams();

  const setToLocal = (id) => {
    addToLocal(id)
  }


  useEffect(() => {
    fetch("/jobsFeaturesData.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id == jobId);
        setJob(jobData);
      });
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-2xl font-extrabold py-12'>Job Details</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0'>
        <div className='lg:col-span-2 flex flex-col space-y-6'>
          <p>
            <strong>Job description: </strong>
            {job_description}
          </p>
          <p>
            <strong>Job Responsibility: </strong>
            {job_responsibility}
          </p>
          <p>
            <strong>Educational Requirements: </strong>
            {educational_requirements}
          </p>
          <p>
            <strong>Experiences: </strong>
            {experiences}
          </p>
        </div>
        <div>
        <div className='bg-[rgba(126,144,254,0.05)] p-8 rounded-md'>
          <h4 className='text-xl font-bold'>Job Details</h4>
          <div className='border my-3'></div>
          <div className='flex space-x-3 pt-4'>
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
            <span>
              <strong>Salary: </strong> ${salary}
            </span>
          </div>
          <div className='flex space-x-3 py-4'>
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
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
              />
            </svg>

            <span>
              <strong>Job Title:</strong> {job_title}
            </span>
          </div>
          <h4 className='text-xl font-bold mt-4'>Contact Information</h4>
          <div className='border my-3'></div>
          <div className='flex space-x-3 pt-4'>
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
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>

            <span>
              <strong>Email: </strong> {email}
            </span>
          </div>
          <div className='flex space-x-3 pt-4'>
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
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>

            <span>
              <strong>Phone: </strong> {phone}
            </span>
          </div>
          <div className='flex space-x-3 pt-4'>
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
            <span>
              <strong>Address: </strong> {location}
            </span>
          </div>
        </div>
        <button onClick={() => setToLocal(id)} className="btn-primary w-full my-6">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
