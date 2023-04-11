import React from "react";
import img1 from "../../assets/All Images/Vector.png";
import img2 from "../../assets/All Images/Vector-1.png";

const Banner2 = () => {
  return (
    <div className='bg-[rgba(126,144,254,0.05)]'>
      <div className='flex justify-between'>
        <img src={img1} alt='banner_img1' />
        <img src={img2} alt='banner_img2' />
      </div>
      <h1 className='text-center text-2xl font-extrabold pb-12'>
        Applied Jobs
      </h1>
    </div>
  );
};

export default Banner2;
