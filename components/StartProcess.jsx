import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'; 
import Button from './Button';

const StartProcess = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8  mx-20  mt-20">
      <div className="hidden lg:block w-[48%] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image className="h-auto max-w-full" alt="" src="/account-bg.png" width={500} height={500} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[-15px] left-[5%]"
        >
          <Image className="h-auto max-w-full" alt="" src="/lady_smiling.png" width={500} height={530} />
        </motion.div>

        <motion.div
          className="absolute top-[-28px] left-[-15%] animate-float-one"
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }} 
        >
          <Image className="h-auto max-w-full" alt="" src="/cube.png" width={75} height={100} />
        </motion.div>

        <motion.div
          className="absolute bottom-[-26px] lg:right-[12%] right-[2%] md:right-[2%] animate-float-two"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }} 
        >
          <Image className="h-auto max-w-full" alt="" src="/cone.png" width={65} height={65} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-[-6px] right-[38%]"
        >
          <Image className="h-auto max-w-full" alt="" src="/people.png" width={200} height={57} />
        </motion.div>
      </div>

      <div className="flex flex-col w-full lg:w-[48%]">
        <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">Open An Account</p>
        <h2 className="text-4xl text-black font-semibold mb-2 lg:mb-10 text-left">Let&apos;s get started</h2>
        <ol className="flex flex-col mb-1 lg:mb-12 list-none p-0 m-0 w-full">
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-[#EDF5FA] py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">01</span>
            <span className="text-lg lg:text-xl text-black font-normal">Sign up in a few minutes</span>
          </li>
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-[#EDF5FA] py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">02</span>
            <span className="text-lg lg:text-xl text-black font-normal">Let us verify your identity</span>
          </li>
          <li className="w-full flex gap-6 items-center border-b-[0.5px] border-b-[#EDF5FA] py-5">
            <span className="text-xl lg:text-3xl text-black font-medium">03</span>
            <span className="text-lg lg:text-xl text-black font-normal">Your account is open; you can send <br /> your first payment</span>
          </li>
        </ol>
        <Button text="Open an account In Minutes" className="px-5 py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a] text-white text-center w-fit mb-4" />
        <p className="text-gray-500 text-xs md:text-sm font-medium">Try it for 30 days. For Free. No obligations</p>
      </div>
    </div>
  );
}

export default StartProcess;
