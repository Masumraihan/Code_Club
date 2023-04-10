import axios from "axios";
import React, { useEffect, useState } from "react";
import Job from "./Job";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const loadJobLists = async () => {
      const res = await axios.get("jobLists.json");
      setJobs(res.data);
    };
    loadJobLists();
  }, []);
  return (
    <div className="py-32 container mx-auto">
      <div className='text-center'>
        <h1 className='text-5xl font-semibold mb-4'>Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {
                jobs.map(job => <Job key={job.id} job={job}/>)
            }
        </div>
    </div>
  );
};

export default JobList;
