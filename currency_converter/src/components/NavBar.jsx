import React from 'react';
import { Link } from 'react-router-dom';
import Darkmode_button from './Darkmode_button';

const Navbar = () => {
  return (
    <nav className='top-0 left-0 w-full h-[100px] dark:bg-blue dark:text-white duration-300 bg-secondary z-50'>
      <div className='container mx-auto py-2 md:py-0'>
        <div className='flex items-center justify-between'>
          <Link to="/" className="py-10 px-5 text-5xl">
            <span className='text-black font-sans'>Currency Converter</span>
          </Link>
          <Darkmode_button />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;