"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "Lana Rey",
    position: "Founder & Leader",
    img: "/avatar.svg",
  },
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "Micheal H",
    position: "Founder & Leader",
    img: "/Avatar.png",
  },
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "J. McGhee",
    position: "Founder & Leader",
    img: "/avatar.svg",
  },
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "Lana Rey",
    position: "Founder & Leader",
    img: "/Avatar.png",
  },
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "Micheal H",
    position: "Founder & Leader",
    img: "/avatar.svg",
  },
  {
    ratings: 5,
    content: "Is it possible to Love your credit card processor? with TeamForce, yes!",
    name: "J. McGhee",
    position: "Founder & Leader",
    img: "/Avatar.png",
  },
];

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const onDotButtonClick = (index) => setSelectedIndex(index);

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="mt-20 bg-[#6d38c3] section w-full py-12 lg:py-24 relative">
      <div className="main-container relative">
        <h2 className="text-center text-5xl font-medium text-white mb-10 lg:mb-16">
          What people <br /> are saying about us
        </h2>

        <div className="overflow-hidden px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              className="flex justify-center w-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.5 }}
            >
              {/* Group 3 testimonials at a time on large screens */}
              <div className="flex w-full max-w-screen-lg space-x-4 lg:space-x-6 mx-auto">
                {testimonials.slice(selectedIndex, selectedIndex + 3).map((testimonial, index) => (
                  <article
                    key={index}
                    className="flex-[1_0_100%] md:flex-[1_0_50%] lg:flex-[1_0_33.3%] min-h-[320px] relative"
                  >
                    <div className="w-full min-h-full flex flex-col gap-3 px-10 py-14 bg-white bg-opacity-10 backdrop-blur-[20px] rounded-[20px] relative">
                      <div className="flex gap-1">
                        {Array(5)
                          .fill(null)
                          .map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg text-white mb-5">
                        {`"${testimonial.content}"`}
                      </p>
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative">
                          <Image fill alt="" src={testimonial.img} />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-lg text-white">{testimonial.name}</p>
                          <p className="text-sm text-[#BBA3E3]">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-2 lg:gap-3 mt-4 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`border border-white w-3 h-3 rounded-full ${
                index !== selectedIndex ? "bg-transparent" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
