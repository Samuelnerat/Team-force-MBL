'use client';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ColoredCards from './ColoredCards';
import { IoGlobe } from 'react-icons/io5';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaKeyboard } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

const stats = [
  { name: 'Active Users', value: 56, suffix: 'm' },
  { name: 'Trusted Companies', value: 45, suffix: 'k' },
  { name: 'Customer care', value: 78, suffix: 'k' },
];

const Services = () => {
   const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const [activeUsers, setActiveUsers] = useState(0);
  const [trustedCompanies, setTrustedCompanies] = useState(0);
  const [customerCare, setCustomerCare] = useState(0);

  const countUp = (targetValue, setValue) => {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); 
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue += increment;
        setValue(currentValue);
      } else {
        clearInterval(interval);
      }
    }, 50); 
  };

  useEffect(() => {
    countUp(100, setActiveUsers);  
    countUp(80, setTrustedCompanies); 
    countUp(110, setCustomerCare);  
  }, []);

  useEffect(() => {
    stats.forEach((stat, index) => {
      controls[index].start({
        opacity: 1,
        transition: { duration: 2, ease: 'easeOut' },
      });
    });
  }, [controls]);

  const formatNumberWithSuffix = (number, suffix) => {
    const formattedNumber = number >= 1000 ? (number / 1000).toFixed(0) : number; 
    return `${formattedNumber}${suffix}`;
  };

  return (
    <section className="w-full lg:pt-0 relative overflow-hidden bg-[#f2f0f6] px-20">

      {/* Content */}
      <div className="mt-20 flex flex-col items-center lg:px-16 main-container pb-10 md:pb-12 lg:pb-24 ">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 w-full mb-10 relative">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-5xl text-black font-medium text-left lg:mb-4">
              We provide the <br className="hidden lg:block" /> best service for you
            </h2>
            <p className="text-xs text-gray-600 font-light text-left">
              We&apos;ve got all your payments covered
            </p>
          </div>
          <div id="stats" className="flex lg:items-center gap-2 lg:gap-10 relative">
            {stats.map((item, index) => (
              <div key={item.name} className="flex flex-col lg:gap-1">
                <h4 className="text-xl lg:text-4xl text-black font-semibold">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls[index]}
                    // initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // animate={{ opacity: 1 }}  
                    viewport={{ once: true }}  
                    style={{ display: 'inline' }}
                  >
                    {index === 0
                      ? formatNumberWithSuffix(activeUsers, 'm')
                      : index === 1
                      ? formatNumberWithSuffix(trustedCompanies, 'k')
                      : formatNumberWithSuffix(customerCare, 'k')}
                  </motion.div>
                </h4>
                <p className="text-xs lg:text-sm text-grey font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-stretch gap-10 p-6 w-full">
          <div className="h-full">
            <ColoredCards
              icon={
                <motion.div
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-7 h-7 lg:w-10 lg:h-10 overflow-hidden">
                    <IoGlobe className="w-10 h-10 text-gray-500" />
                  </div>
                </motion.div>
              }
              title="Online"
              variant="one"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <motion.div
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                    <HiBuildingOffice2 className="w-10 h-10 text-gray-500" />
                  </div>
                </motion.div>
              }
              title="Bank Transfers"
              variant="two"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <motion.div
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                    <FaKeyboard className="w-10 h-10 text-gray-500" />
                  </div>
                </motion.div>
              }
              title="Keyed"
              variant="three"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <motion.div
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                    <GoPersonFill className="w-10 h-10 text-gray-500" />
                  </div>
                </motion.div>
              }
              title="In-Person"
              variant="default" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
