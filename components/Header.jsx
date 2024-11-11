'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='px-4 lg:px-40 bg-gradient-to-r from-violet-700 via-purple-600 to-purple-500 w-full text-white z-[1000] py-5'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
          <Image alt="/logo.png" src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731336279/logo_f8vtwn.png" width={100} height={100} />
        </Link>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX size={24} className="text-black" /> 
          ) : (
            <FiMenu size={24} className="text-white" /> 
          )}
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className='hidden lg:flex justify-center items-center gap-8'>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Pages</Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </nav>

        {/* Animated Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-4 lg:hidden z-[2000] overflow-hidden'
          >
            {/* Close Icon inside the Dropdown */}
            <FiX
              size={30}
              className="absolute top-6 right-6 text-white cursor-pointer"
              onClick={toggleMenu}
            />
            <Link href={"#"} onClick={toggleMenu} className="text-white">Home</Link>
            <Link href={"#"} onClick={toggleMenu} className="text-white">Pages</Link>
            <Link href={"#"} onClick={toggleMenu} className="text-white">Projects</Link>
            <Link href={"#"} onClick={toggleMenu} className="text-white">Blog</Link>
            <Link href={"#"} onClick={toggleMenu} className="text-white">Contact</Link>
            <Link href={"#"}>Login</Link>
            <Button text='Sign Up' className="px-5 py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a]"/>
          </motion.nav>
        )}

        {/* Login and Sign Up Links for Large Screens */}
        <div className='hidden lg:flex items-center gap-6'>
          <Link href={"#"}>Login</Link>
          <Button text='Sign Up' className="px-5 py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a]"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
