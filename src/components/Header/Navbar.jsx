import React, { useState } from "react";
import AppLink from "./AppLink";

const Navbar = () => {
  const [isFold, setIsFold] = useState(false);
  return (
    <div className=' relative z-50'>
      <div className='hidden md:block container mx-auto py-12'>
        <nav className='flex justify-between items-center'>
          <h2 className="text-3xl font-bold">CodeClub</h2>
          <ul className='flex space-x-6'>
            <li>
              <AppLink to='/'>Home</AppLink>
            </li>
            <li>
              <AppLink to='/statistics'>Statistics</AppLink>
            </li>
            <li>
              <AppLink to="/applied">Applied Jobs</AppLink>
            </li>
            <li>
              <AppLink to="/blogs">Blog</AppLink>
            </li>
          </ul>
          <button className='btn-primary'>Star Applying</button>
        </nav>
      </div>
      <div className='block md:hidden p-6'>
        {!isFold ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'
            onClick={() => setIsFold(true)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'
            onClick={() => setIsFold(false)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}

        {isFold ? (
          <nav className='flex flex-col items-start px-5 space-y-2'>
            <h2 className="text-3xl font-bold">CodeClub</h2>
            <ul className='flex space-x-6'>
              <li>
                <AppLink to='/'>Home</AppLink>
              </li>
              <li>
                <AppLink to='/marks'>Statistics</AppLink>
              </li>
              <li>
                <AppLink to="/applied">Applied Jobs</AppLink>
              </li>
              <li>
                <AppLink>Blog</AppLink>
              </li>
            </ul>
            <button className='btn-primary'>Star Applying</button>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
