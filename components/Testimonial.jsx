'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const testimonial = [
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

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const controls = useAnimation();
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;
  const testimonialsPerPage = isLargeScreen ? 3 : 1;

  const moveToNext = () => {
    setSelectedIndex((prevIndex) => 
      (prevIndex + testimonialsPerPage) % testimonial.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, [selectedIndex, testimonialsPerPage]);

  useEffect(() => {
    controls.start({ x: -selectedIndex * (100 / testimonialsPerPage) + "%" });
  }, [selectedIndex, controls, testimonialsPerPage]);

  const onDotButtonClick = (index) => {
    setSelectedIndex(index * testimonialsPerPage);
    controls.start({ x: -index * 100 + "%" });
  };

  const dotCount = Math.ceil(testimonial.length / testimonialsPerPage);

  return (
    <section className="mt-20 flex flex-col items-center w-full py-12 lg:py-24 relative bg-[#6d38c3]">
      <div className="mx-auto w-full px-16">
        <h2 className="text-center text-5xl font-medium text-white mb-10 lg:mb-16">What people <br /> are saying about us</h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={controls}
            initial={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {testimonial.map(({ name, content, ratings, position, img }, index) => (
              <div
                className={`relative pl-1 md:pl-4 lg:pl-6 flex-[1_0_${0 / testimonialsPerPage}%] min-h-[320px]`}
                key={index}
              >
                <motion.article
                  className="lg:w-[360px] w-[264px] min-h-full flex flex-col gap-3  px-10 py-14 bg-white bg-opacity-10 backdrop-blur-[20px] rounded-[20px] relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="flex gap-1">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <div key={index} className="h-4 w-4 relative">
                          <FaStar className='text-yellow-500'/>
                        </div>
                      ))}
                  </div>
                  <p className="text-lg text-white mb-5">{`"${content}"`}</p>
                  <div className="flex gap-2 items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      <Image fill alt="" src={img} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg text-white">{name}</p>
                      <p className="text-sm text-[#BBA3E3]">{position}</p>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-2 lg:gap-3 mt-4 lg:mt-12">
          {Array(dotCount).fill(null).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`border border-white w-3 h-3 rounded-full ${
                index !== Math.floor(selectedIndex / testimonialsPerPage) ? "bg-transparent" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
