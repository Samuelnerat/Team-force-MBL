import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from "./Button";
import { motion } from "framer-motion";

const texts = [
  "The next evolution of payment methods.",
  "The future of payment solutions.",
  "The next wave of payment systems."
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); 

  useEffect(() => {
    const cycleText = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[textIndex]);
        setFadeIn(true);
      }, 500); 
    }, 3000);

    return () => clearInterval(cycleText);
  }, [textIndex]);

  return (
    <div className="pl-0 lg:pl-40 text-white min-h-[70vh] md:min-h-screen 2xl:min-h-[878px] flex flex-col items-center justify-center xl:justify-start w-full pt-10 lg:pt-20 relative overflow-hidden bg-gradient-to-r from-violet-700 via-purple-600 to-purple-500 ">
      <div className="flex flex-col xl:flex-row justify-between mx-auto">
        {/* Left Section (Text) */}
        <div className="xl:w-[50%] max-w-[600px]  min-h-[400px] md:min-h-[600px] relative flex flex-col justify-center px-5">
          <motion.h1
            className="text-5xl md:text-7xl  font-medium mb-5 md:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: fadeIn ? 1 : 0 }}
            transition={{ duration: 0.3 }} 
          >
            {currentText}
          </motion.h1>
          <div className="overflow-hidden">
            <Button text="Get started For Free" className="inline-block px-5 py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a] mb-5 md:mb-20 w-fit" />
          </div>

          <div className="overflow-hidden pb-10">
            <div>
              <p className="text-xs md:text-sm text-lightPurple font-normal mb-4">
                Over <span className="text-white">50k+ Client</span> all over the world
              </p>
              <motion.div className="flex items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: fadeIn ? 1 : 0 }}
                          transition={{ duration: 0.9 }} 
              >
                {["https://res.cloudinary.com/du1fj63cs/image/upload/v1731336530/Avatar_s2kltq.png", "https://res.cloudinary.com/du1fj63cs/image/upload/v1731336392/avatar_plppja.svg", "https://res.cloudinary.com/du1fj63cs/image/upload/v1731336530/Avatar_s2kltq.png", "https://res.cloudinary.com/du1fj63cs/image/upload/v1731336392/avatar_plppja.svg"].map((img, index) => (
                  <div key={index} className="w-6 h-6 md:w-9 md:h-9 border-2 border-main rounded-full -mr-2 relative">
                    <Image fill src={img} alt="avatars used" className="rounded-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Section (Images) */}
        <motion.div
          className="translate-x-[50px] lg:translate-x-[0px] relative hidden lg:flex xl:w-[50%]"
          animate={{
            x: [0, 10, -20, 0], 
            y: [0, 0, 10, 0] 
          }}
          transition={{
            repeat: Infinity, 
            repeatType: "loop", 
            duration: 2, 
          }}
        >

          <motion.div
            className="absolute bottom-[25%] left-[-10%]"
            animate={{
              x: [0, 20, -20, 0], 
              y: [0, -15, 15, 0]  
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop", 
              duration: 3,
            }}
          >
            <Image width={200} height={180} src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731336651/property-card_a9scl5.png" alt="A property card" />
          </motion.div>
          <Image width={1000} height={1000} src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731337027/hand_ktn8qg.png" className="hidden md:block object-cover" alt="a hand holding a phone" />

          <motion.div
            className="absolute top-[28%] left-[25%] backdrop-blur-[12px]"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0]  
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
            }}
          >
            <Image width={350} height={164} src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731336715/credit-card_f22iki.png" alt="a credit card" />
          </motion.div>

          <motion.div
            className="absolute top-[52%] left-[25%]"
            animate={{
              x: [0, -10, 10, 0],
              y: [0, 5, -5, 0]   
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3.5,
            }}
          >
            <Image width={480} height={164} src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731336825/spotify_hwt2wh.png" alt="spotify logo" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 translate-y-3 lg:translate-y-2 -translate-x-1/2 w-[200px] h-[65px] lg:w-[260px] lg:h-[75px] flex flex-col gap-1 justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image fill src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731336895/scroll-down_hk132w.png" alt="white background" />
        </div>
        <a href="#" className="relative w-2 h-6 lg:w-4 lg:h-6 rounded-3xl border-black border flex justify-center p-1">
          <motion.span
            data-anim="scroll-down"
            className="absolute  -translate-x-1/2 inline-block w-1 h-1 lg:w-[5px] lg:h-[5px] border border-black rounded-full"
            animate={{
              y: [0, 9, 0], 
            }}
            transition={{
              duration: 7,  
              repeat: Infinity,  
              repeatType: 'loop',
              ease: 'easeInOut', 
            }}
          />
        </a>
        <p className="relative text-xs lg:text-sm text-black">Scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
