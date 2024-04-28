import React from 'react';
import { BsList as Hamburger } from "react-icons/bs";
import { NAV_LINKS } from '@/app/constants';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitcher';

interface NavMobileProps {
  isOpen: boolean;
  setOpen: React.Dispatch<boolean>;
}

const NavMobile = ({ isOpen, setOpen }: NavMobileProps) => {
  return (
    <div className='md:hidden text-black dark:text-white '>
      <Hamburger size={40} onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <div className='fixed left-0 shadow-4xl right-0  p-5 pt-0 mt-5 bg-slate-50 bg-opacity-100 dark:bg-black dark:border-t-[1px] dark:border-gray-100'>
          <ul className='h-screen gap-12 flex flex-col text-black dark:text-white justify-center items-center'>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=' font-medium  text-3xl flex cursor-pointer py-1.5 transition-all hover:opacity-100 duration-200'
              >
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <Link href={'/contacts'}>
            <div className='flex gap-10 flex-col'>
          <Link href='/Login'>
            <button className=' border-[1px] dark:border-gray-100 border-gray-900 rounded-full  text-3xl font-medium  cursor-pointer py-4 px-7'>Sign In</button>
          </Link>
          <Link href='/SignUp'>
          <button className=' flex justify-center items-center text-white font-medium  cursor-pointer bg-gray-900 border-0 focus:outline-none  hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900  dark:bg-gray-200  text-3xl rounded-full py-4 px-6 dark:hover:text-black hover:text-white'>Sign Up</button>
          </Link>
        </div>
            </Link>
            <ThemeSwitch />
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
