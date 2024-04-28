'use client';
import { kMaxLength } from 'buffer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MainButton from '../MainButton';
import { FaArrowRightLong } from "react-icons/fa6";



const HeroSection = () => {
  
  
  return (
    <section
      id='home'
      className='text-gray-600 dark:text-white body-font w-full flex justify-center mb-60'
    >
      <div className='const-div '>
        <div className=' mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0 items-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100'>
            FRC Smart Camel Race Farm
            </h1>
            <p className='mb-8 leading-relaxed'>
            Welcome to FRC Smart Camel Race Farm! Step into a world where data comes to life,
             transforming the exhilarating sport of camel racing into a captivating visual journey.
              Our platform meticulously captures race data and presents it in a dynamic and user-friendly 
              interface, inviting you to explore every thrilling moment with clarity and ease
            </p>
            <Link href='/SignUp'>
                  <button className='flex justify-center items-center text-white bg-gray-900 border-0 py-4 px-8 focus:outline-none  hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900  dark:bg-gray-200 rounded-md text-lg'>
                 Get Started 
             </button>
            </Link>

            
            
          </div>
          <Image src='/Capture.png' alt='img' width={500} height={500} className=' '/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
