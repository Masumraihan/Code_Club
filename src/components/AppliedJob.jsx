import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";


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
    <div className='container mx-auto py-32'>
      <h1 className='text-center text-2xl font-extrabold pb-12'>
        Applied Jobs
      </h1>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <SingleJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
