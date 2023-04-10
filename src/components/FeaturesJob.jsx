import axios from "axios";
import React, { useEffect, useState } from "react";
import FeatureJob from "./FeatureJob";

const FeaturesJob = ({data}) => {
    const [allJobs,setAllJobs] = useState([])
  const [loadedData, setLoadedData] = useState([]);
  const setAllData = () => {
    setLoadedData(allJobs)
  }
  useEffect(() => {
    setLoadedData(data.slice(0,4));
    setAllJobs(data)
  }, []);
  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold mb-4'>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className='pt-8 grid md:grid-cols-2 gap-6'>
        {loadedData.map((job) => (
          <FeatureJob key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center pt-10 mb-32">
        <button onClick={setAllData} className='btn-primary'>see all jobs</button>
      </div>
    </div>
  );
};

export default FeaturesJob;
