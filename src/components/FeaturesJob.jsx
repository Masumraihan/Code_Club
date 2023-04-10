import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeatureJob from './FeatureJob';

const FeaturesJob = () => {
    const [loadedData,setLoadedData] = useState([]);
    //console.log(featuresJobs);
    useEffect(()=>{
        const loadFeaturesJobData = async() => {
            const res = await axios.get("jobsFeaturesData.json");
            //setLoadedData(res.data)
        }
        //setFeaturesJobs(loadedData.slice(0,4))
        loadFeaturesJobData()
    },[])
    return (
        <div>
            <div className='text-center'>
        <h1 className='text-5xl font-semibold mb-4'>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div>
            {
                //sliceJobs.map(job => <FeatureJob/>)
            }
        </div>
      </div>
        </div>
    );
};

export default FeaturesJob;