import { FOOTER_CONTACT_INFO, NAV_LINKS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='mt-20 mb-3 py-5 text-black dark:text-white font-light flex justify-center border-t-[1px]  dark:border-white border-black'>
      <div className='const-div padding-container max-container flex w-full flex-col gap-5 mx-20'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='https://www.frc.ae/' className='mb-10'>
            <Image src='/logo.png' alt='logo' height={100} width={200} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            <FooterColumn title={'Links'}>
              <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                {NAV_LINKS.map((items) => (
                  <Link
                    href={items.href}
                    key={items.key}
                    className='hover:font-bold'
                  >
                    {items.label}
                  </Link>
                ))}{' '}
              </ul>
            </FooterColumn>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    key={link.label}
                    className='flex gap-4 md:flex-col lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title= 'Socials'>
                <ul className='regular-14 flex gap-4 dark:text-white text-black'>
                <li>
                <Link href='https://www.facebook.com/profile.php?id=100086306988384'>
                    <BsFacebook size={24}/>
                </Link>   
                </li>
                <li>
                <Link href='https://www.instagram.com/fujairah_research_centre/'>
                    <AiOutlineInstagram  size={24}/>
                </Link>   
                </li>
                <li>
                <Link href='https://www.linkedin.com/company/fujairah-research-center/'>
                    <BsLinkedin size={24}/>
                </Link>   
                </li>
                
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20 flex justify-center items-center' />
        <p className='regular-14 w-full text-center'>
          2024 Fujairah Reasearch Center | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className=' font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
