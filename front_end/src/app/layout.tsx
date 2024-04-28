import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
//import NavBar from '@/components/NavBar';
import Footer from '@/app/Components/sections/Footer';
import NavBar from '@/app/Components/NavBar';
import { Providers } from './providers';
import { FormProvider } from '../../context/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FRC Activities App',
  description: 'Fujairah Research Center',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          
            
            <FormProvider>
            <NavBar/>
            <main>{children}</main>
            </FormProvider>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
