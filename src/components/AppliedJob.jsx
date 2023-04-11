import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";
import Banner from "./Header/Banner";
import img1 from "../assets/All Images/Vector.png";
import img2 from "../assets/All Images/Vector-1.png";

const AppliedJob = () => {
  const [jobs, setJobs] = useState([]);
  const loadedData = useLoaderData();
  useEffect(() => {
    let newJobs = [];
    const storedJobId = JSON.parse(localStorage.getItem("job-id"));
    if (storedJobId) {
      for (const id of storedJobId) {
        const newJob = loadedData.find((job) => job.id === id);
        if (newJob) {
          newJobs.push(newJob);
        }
      }
      setJobs(newJobs);
    }
  }, []);
  return (
    <>
      <div className=' w-full top-0 hidden md:absolute md:block'>
        <Banner>
          <div className='bg-[rgba(126,144,254,0.05)]'>
            <div className='flex justify-between'>
              <img src={img1} alt='banner_img1' />
              <img src={img2} alt='banner_img2' />
            </div>
            <h1 className='text-center text-2xl font-extrabold pb-12'>
              Applied Jobs
            </h1>
          </div>
        </Banner>
      </div>
      <div className='container mx-auto py-32'>
        {/*<h1 className='text-center text-2xl font-extrabold pb-12'>
          Applied Jobs
        </h1>*/}
        <div className='flex justify-end'>
          <div className='dropdown dropdown-left'>
            <label tabIndex={0} className='btn btn-ghost bg-[#F4F4F4] mb-8'>
              Filter By
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJob;