'use client';
import React from 'react';

interface MainButtonProps {
  title: string;
  onClick: any;
}

const MainButton = ({ title, onClick, ...props }: MainButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='inline-flex text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg'
      {...props}
    >
      {title}
    </button>
  );
};

export default MainButton;
