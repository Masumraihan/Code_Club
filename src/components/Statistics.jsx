import React, { useEffect, useState, PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../assets/All Images/Vector.png";
import img2 from "../assets/All Images/Vector-1.png";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import Banner2 from "./Header/Banner2";

const Statistics = () => {
  const [marksInfo, setMarks] = useState([]);
  const marksData = useLoaderData();
  useEffect(() => {
    setMarks(marksData);
  }, []);
  return (
    <div className="container mx-auto">
      <Banner2>
        <div className='bg-[rgba(126,144,254,0.05)] absolute top-0 w-full hidden md:block'>
          <div className='flex justify-between'>
            <img src={img1} alt='banner_img1' />
            <h1 className='text-center flex items-end text-2xl font-extrabold py-12'>
              Assignment Marks
            </h1>
            <img src={img2} alt='banner_img2' />
          </div>
        </div>
      </Banner2>
      <div className="my-12 md:my-32">
      <h1 className='md:hidden text-center text-2xl font-extrabold py-12'>
          Applied Jobs
        </h1>
        <ResponsiveContainer width='100%' height={400}>
          <ComposedChart data={marksInfo}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke='#f5f5f5' />
            <Area
              type='monotone'
              dataKey='amt'
              fill='#8884d8'
              stroke='#8884d8'
            />
            <Bar dataKey='marks' barSize={20} fill='#9873FF' />
            <Line type='monotone' dataKey='marks' stroke='#7E90FE' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
