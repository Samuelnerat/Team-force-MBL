'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

const faqs = [
  {
    question: "Do I need to change banks?",
    answer:
      "No, you don’t need to change your bank. Our platform allows you to securely link your existing bank account.",
  },
  {
    question: "Do I need to change banks",
    answer:
      "The Teamforce is built right into your account dashboard, and is accessible immediately after signing up.",
  },
  {
    question: "How can I order equipment?",
    answer:
      "To order equipment, simply go to the 'Shop' section on our website or reach out to our customer service team for assistance.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes, we provide volume discounts. Please contact our sales team for customized pricing based on your needs.",
  },
  {
    question: "How does signing up work?",
    answer:
      "Signing up is simple. Visit our website, click on the 'Sign Up' button, and fill in your details to create your account.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  return (
    <section className='mt-20 flex flex-col items-center mb-12 mx-auto w-full px-20'>
      <div className='flex flex-col xl:flex-row justify-between gap-5 w-full'>
        <div className='w-full xl:w-[46%] relative'>
          <p className="text-base text-black border-b-2 font-medium border-[#B5EA88] mb-4 w-fit">Support</p>
          <h2 className="text-left mb-1 lg:mb-4 text-5xl text-black font-medium">Frequently <br /> Asked Questions</h2>
          <p className="text-sm lg:text-lg text-gray-500 font-normal mb-2 lg:mb-7">Seut ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          <Button text="Get in Touch" className="px-5 py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a] w-fit mb-4 text-white" />
          <Image alt='woman sitting and reading' src="https://res.cloudinary.com/du1fj63cs/image/upload/v1731335251/woman_nhxxhe.png" className="h-auto max-w-full absolute bottom-[10%] right-[20%] hidden xl:block" width={150} height={200}/>
        </div>

        <div>
          <ul>
            {faqs.map(({ question, answer }, index) => (
              <li
                key={index}
                className={`flex flex-col gap-4 pt-6 w-full px-4 ${
                  activeIndex === index
                    ? "shadow-2xl rounded-b-xl pb-4"
                    : "border-b border-b-[#F7F7F9] pb-6"
                }`}
              >
                <div className="flex justify-between w-full items-center gap-3">
                  <span className="text-xl text-black font-semibold">
                    {question}
                  </span>
                  <button
                    onClick={() => {
                      setActiveIndex(activeIndex === index ? -1 : index);
                    }}
                    className="w-4 h-4 rounded-full border border-grey flex items-center justify-center"
                  >
                    <span
                      className={`text-base text-gray-500 w-6 h-6 flex items-center justify-center rounded-full border-gray-500`}
                    >
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                </div>
                <motion.div
                  className={`overflow-hidden`}
                  initial={{ height: 0 }}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-base text-grey font-normal pr-6">
                    {answer}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
