import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;