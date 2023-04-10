import React from 'react';
import Banner from './Header/Banner';
import JobList from './JobList';
import FeaturesJob from './FeaturesJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobData = useLoaderData();
    return (
        <div>
            <Banner/>
            <JobList/>
            <FeaturesJob jobData={jobData}/>
        </div>
    );
};

export default Home;