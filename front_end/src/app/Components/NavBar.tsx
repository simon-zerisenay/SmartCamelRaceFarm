'use client';
import { NAV_LINKS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import NavMobile from './NavMobile';
import { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitcher';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between px-10 items-center w-full fixed z-50 bg-slate-50 dark:bg-black  p-0 m-0 ${scrolling ? '' : 'md:bg-opacity-0 md:dark:bg-opacity-0 '}  text-black dark:text-white`}>
      <Link href='/'>
        <Image src='/LOGO1.png' alt='logo' height={20} width={100} />
      </Link>

      <ul className='hidden h-full gap-12 md:flex   items-center'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='font-medium flexCenter cursor-pointer transition-all hover:opacity-100 duration-200'
          >
            {link.label}
          </Link>
        ))}
        <div className='flex gap-3'>
          <Link href='/Login'>
            <button className='border-[1px] dark:border-gray-100 border-gray-900 rounded-full py-2 px-4'>Log In</button>
          </Link>
          <Link href='/SignUp'>
            <button className='flex justify-center items-center text-white bg-gray-900 border-0 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900 dark:bg-gray-200 text-lg rounded-full py-2 px-4 dark:hover:text-black hover:text-white'>Sign Up</button>
          </Link>
        </div>
        <ThemeSwitch />
      </ul>
      
      <NavMobile isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
