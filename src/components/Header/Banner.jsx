import React from "react";
import bannerImg from "../../assets/All Images/BannerImg.png";

const Banner = ({children}) => {
  return (
    <div>
      {children}
    </div>
    //<div className="bg-[rgba(126,144,254,0.05)] py-8 md:p-0 max-h-full">
    //  <div className='container mx-auto'>
    //    <div className='grid md:grid-cols-2 items-center gap-4 lg:gap-16'>
    //      <div className=' text-center md:text-start px-5 md:px-0'>
    //        <h1 className='text-7xl md:text-5xl lg:text-7xl font-bold'>
    //          One Step <br />
    //          Closer To Your <br />
    //          <span className='text-brand'> Dream Job</span>
    //        </h1>
    //        <p className='text-lg py-6'>
    //          Explore thousands of job opportunities with all the information
    //          you need. Its your future. Come find it. Manage all your job
    //          application from start to finish.
    //        </p>
    //        <button className='btn-primary'>Get Started</button>
    //      </div>
    //      <img className='w-full -order-1 md:order-1' src={bannerImg} alt='' />
    //    </div>
    //  </div>
    //</div>
  );
};

export default Banner;
