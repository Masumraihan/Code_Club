import React from "react";
import icons from "../assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className='bg-[#1A1919]'>
      <footer className=' container mx-auto p-10 grid md:grid-cols-2 lg:grid-cols-6 gap-8 items-start'>
        <div className='text-white lg:col-span-2 '>
          <h2 className="text-3xl font-extrabold">Code Club</h2>
          <p className="py-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={icons} alt='' />
        </div>
        <div className='text-white flex flex-col'>
          <span className='footer-title'>Company</span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>
        <div className='text-white flex flex-col'>
          <span className='footer-title'>Product</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div className='text-white flex flex-col'>
          <span className='footer-title'>Support</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
        <div className='text-white flex flex-col'>
          <span className='footer-title'>Contact</span>
          <span className='link link-hover'>524 Broadway , NYC</span>
          <span className='link link-hover'>+1 777 - 978 - 5570</span>
        </div>
      </footer>
      <footer className='footer container mx-auto px-10 py-4 text-base-content border-base-300'>
        <div className='items-center grid-flow-col'>
          <p className="text-white">
          @2023 CareerHub. All Rights Reserved
          </p>
        </div>
        <div className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
          <p className="text-white">Powered by CareerHub</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
