import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";
import img1 from "../assets/All Images/Vector.png";
import img2 from "../assets/All Images/Vector-1.png";
import { filterByJobsType } from "./DbFunctions/filterByJobType";
import Banner2 from "./Header/Banner2";

const AppliedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const loadedData = useLoaderData();
  const handleFilterJobs = () => {
    const filteredJobs = filterByJobsType(allJobs, "Remote");
    setJobs(filteredJobs);
  };
  const handleFilterJobs2 = () => {
    const filteredJobs = filterByJobsType(allJobs, "Onsite");
    setJobs(filteredJobs);
  };
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
      setAllJobs(newJobs);
    }
  }, []);
  return (
    <>
      <Banner2>
        <div className='bg-[rgba(126,144,254,0.05)] absolute top-0 w-full hidden md:block'>
          <div className='flex justify-between'>
            <img src={img1} alt='banner_img1' />
            <h1 className='text-center flex items-end text-2xl font-extrabold py-12'>
              Applied Jobs
            </h1>
            <img src={img2} alt='banner_img2' />
          </div>
        </div>
      </Banner2>

      <div className='container mx-auto py-32'>
        <h1 className='md:hidden text-center text-2xl font-extrabold py-12'>
          Applied Jobs
        </h1>
        {
         jobs.length ? <div>
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
                  <li onClick={handleFilterJobs}>
                    <a>Remote</a>
                  </li>
                  <li onClick={handleFilterJobs2}>
                    <a>Onsite</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              {jobs.map((job) => (
                <SingleJob key={job.id} job={job} />
              ))}
            </div>
          </div> : <h1 className="text-3xl text-center font-extrabold text-brand">Please apply some job....</h1>
        }
      </div>
    </>
  );
};

export default AppliedJob;
