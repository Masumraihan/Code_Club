import axios from "axios";
import React, { useEffect, useState } from "react";
import FeatureJob from "./FeatureJob";

const FeaturesJob = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    const loadFeaturesJobData = async () => {
      const res = await axios.get("jobsFeaturesData.json");
      setLoadedData(res.data);
    };
    loadFeaturesJobData();
  }, []);
  return (
    <div className="container mx-auto">
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
    </div>
  );
};

export default FeaturesJob;
