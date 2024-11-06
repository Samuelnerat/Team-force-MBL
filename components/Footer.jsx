'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaVimeoV, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <footer className=' lg:pt-4 pb-6 lg:px-20 px-8 pt-10'>
      <div className='mx-auto w-full px-4'>
        <div className='flex flex-wrap justify-between gap-10'>
          {/* Footer Content */}
          <div className='flex flex-col gap-6'>
            <div className='w-[120px] h-[40px] relative'>
              <Image alt="" src="/Second-Logo.png" width={100} height={100}/>
            </div>
            <p className="text-lg text-gray-500">Lorem Ipsum Lorem Ipsum</p>
            <div className="flex flex-col gap-2">
              <Link className="flex items-center gap-2" href={'#'}>
                <FaPhoneVolume className="w-6 h-6 text-gray-500" />
                <p className='text-xl text-gray-500'>+999999999</p>
              </Link>
              <Link className="flex items-center gap-2" href={'#'}>
                <BiSolidMessageRoundedDetail className="w-5 h-5 text-gray-500"/>
                <p className="text-base text-gray-500">teamforce@loremipsum.com</p>
              </Link>
            </div>
          </div>
          
          {/* Other sections of the footer */}
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Solutions</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Payments</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Advances</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Online Checkout</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Dashboard</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Get Started</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Other Pages</h4>
            <ul className="flex flex-col gap-3 list-disc ml-4">
              <li className="text-base text-gray-500 cursor-pointer hover:underline">About</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Services</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">How It Works</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Pricing Plan</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Blog</li>
              <li className="text-base text-gray-500 cursor-pointer hover:underline">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-semibold">Download App</h4>
            <div className='flex gap-4'>
              <Image className="max-w-full h-auto rounded-[10px]" alt='' src="/Qr-code.png" width={100} height={100}/>
              <div className="flex flex-col gap-4">
                <Image className='max-w-full h-auto rounded-[10px]' alt='' src="/App_store.png" width={120} height={40}/>
                <Image className='max-w-full h-auto rounded-[10px]' alt='' src="/GooglePlay.png" width={150} height={40}/>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between border-t border-t-[#DFDFEA] mt-20 pt-5">
      <div className="flex gap-2 items-center order-1">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ type: "spring", stiffness: 300, damping: 10 }} 
        >
          <Link className="bg-white w-9 h-9 flex items-center justify-center rounded-[10px] shadow-icon" href={'#'}>
            <FaFacebookF className='text-gray-500'/>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link className="bg-white w-9 h-9 flex items-center justify-center rounded-[10px] shadow-icon" href={'#'}>
            <FaTwitter className='text-gray-500'/>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link className="bg-white w-9 h-9 flex items-center justify-center rounded-[10px] shadow-icon" href={'#'}>
            <FaVimeoV className='text-gray-500'/>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }} 
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link className="bg-white w-9 h-9 flex items-center justify-center rounded-[10px] shadow-icon" href={'#'}>
            <FaInstagram className='text-gray-500'/>
          </Link>
        </motion.div>
      </div>
      <p className="text-gray-500 text-base text-center order-3 md:order-2">
        Full Copyright & Design By Teamforce © 2024
      </p>
      <button className="bg-white text-xs font-normal text-gray-500 w-[120px] h-8 rounded-[10px] items-center justify-between px-2 flex gap-2 order-2 md:order-3">
        English (US)<MdKeyboardArrowDown className='text-gray-500' />
      </button>
    </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-10 right-10 p-4 bg-[#6865ff] text-lg text-white rounded-lg cursor-pointer"
        onClick={scrollToTop}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
        }}
      >
        ↑
      </motion.div>
    </footer>
  );
};

export default Footer;
