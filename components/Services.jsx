'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ColoredCards from './ColoredCards';
import { IoGlobe } from 'react-icons/io5';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaKeyboard } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

const stats = [
  { name: 'Active Users', value: '3.5m' },
  { name: 'Trusted Companies', value: '240+' },
  { name: 'Customer care', value: '78k' },
];

const Services = () => {
  // Create individual animation controls for each stat
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  useEffect(() => {
    // Start animation for each stat element
    stats.forEach((stat, index) => {
      controls[index].start({
        opacity: 1,
        transition: { duration: 2, ease: 'easeOut' },
      });
    });
  }, [controls]);

  return (
    <section className="w-full lg:pt-0 relative overflow-hidden bg-[#f2f0f6] px-20">
      {/* Content */}
      <div className="mt-20 flex flex-col items-center lg:px-16 main-container pb-10 md:pb-12 lg:pb-24">
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
                    style={{ display: 'inline' }}
                  >
                    {item.value}
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
                <div className="relative w-7 h-7 lg:w-10 lg:h-10 overflow-hidden">
                  <IoGlobe className="w-10 h-10 text-gray-500" />
                </div>
              }
              title="Online"
              variant="one"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                  <HiBuildingOffice2 className="w-10 h-10 text-gray-500" />
                </div>
              }
              title="Bank Transfers"
              variant="two"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                  <FaKeyboard className="w-10 h-10 text-gray-500" />
                </div>
              }
              title="Keyed"
              variant="three"
            />
          </div>
          <div className="h-full">
            <ColoredCards
              icon={
                <div className="relative w-8 h-7 lg:w-11 lg:h-10 overflow-hidden">
                  <GoPersonFill className="w-10 h-10 text-gray-500" />
                </div>
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
