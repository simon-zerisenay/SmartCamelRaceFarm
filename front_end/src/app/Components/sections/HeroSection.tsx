import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='text-white body-font w-full flex justify-center items-center  relative md:h-screen  bg-[url("/camel.jpg")] bg-cover bg-no-repeat'
     
    >
      <div className='const-div md:h-screen bg-black bg-opacity-70 w-screen'>
        <div className=' mx-auto flex py-24 md:flex-row flex-col items-center justify-center '>
          <div className='  flex flex-col justify-center items-center mt-60'>
            <h1 className='title-font font-serif sm:text-5xl text-3xl mb-4 font-semibold text-white text-center'>
              FRC Smart Camel Race Farm
            </h1>
            <p className='mb-3 font-serif font-medium'>Revolutionize camel race viewing with immersive data visualizations.</p>
            <Link href='/SignUp'>
              <button className='flex justify-center items-center text-white bg-gray-900 border-0 py-4 px-8 focus:outline-none  hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900  dark:bg-gray-200 rounded-md text-lg'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
