import React from 'react';
import Banner from './Header/Banner';
import JobList from './JobList';
import FeaturesJob from './FeaturesJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner/>
            <JobList/>
            <FeaturesJob data={data}/>
        </div>
    );
};

export default Home;