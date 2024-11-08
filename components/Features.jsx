import React from 'react';
import Card from './Card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        opacity: { duration: 0.6, ease: "easeOut" }, 
        y: { type: "spring", stiffness: 100, damping: 25, duration: 0.8 },
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: -5, transition: { duration: 1 } },
  };

  return (
    <section className="mt-20 flex flex-col items-center bg-white main-container">
      <div className="flex flex-col items-center gap-1 mb-6 lg:mb-4">
        <h2 className="text-center text-5xl text-black font-medium">
          You&apos;ll love our <br className="hidden lg:block" /> powerful
          payments.
        </h2>
        <p className="text-gray-500 text-md">
          We&apos;ve got all your payments covered
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:p-6 mx-5 lg:mx-32">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <Card
            className='bg-[#f7e7e3]'
            title="Scan & Go"
            description={
              <>
                Transform your payment link into a QR code that customers can
                scan with their <br className="hidden lg:block " /> phone to pay.
              </>
            }
            variant="one"
            imageContent={
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="absolute bottom-[10%] xl:bottom-[20%] left-[60%] lg:left-[45%] w-[100px] lg:w-[100px] h-[100px] lg:h-[100px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/Qr-code.png"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="absolute hidden lg:block bottom-[0px] xl:bottom-[0%] right-[-2%] lg:right-[15%] w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/pos.png"
                  />
                </motion.div>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <Card
            className='bg-[#dbe4f9]'
            title="Easily Send Requests via e-mail or SMS"
            description={<>... or copy-paste the link.</>}
            variant="two"
            imageContent={
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="hidden xl:block absolute bottom-[30px] right-[0] w-[280px] h-[240px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/circle.png"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="absolute bottom-[-4%] md:bottom-[-10%] xl:bottom-[0%] left-[60%] md:right-[-40%] xl:left-[30%] w-[250px] h-[250px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/message.png"
                  />
                </motion.div>
              </>
            }
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-2"
        >
          <Card
            className='bg-[#e4caf7]'
            title="Online Billing & Invoicing Payments"
            description={
              <>
                Get paid faster with Online Invoicing <br /> and the Virtual
                Terminal.
              </>
            }
            variant="three"
            imageContent={
              <>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="absolute bottom-[20%] lg:bottom-[10%] right-[10%] lg:right-[10%] xl:right-[38%] w-[100px] h-[108px] lg:w-[200px] lg:h-[208px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/recipet.png"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageVariants}
                  className="absolute hidden lg:block lg:bottom-[-14%] lg:right-[-30%] xl:right-[7%] w-[311px] h-[364px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/shoe.png"
                  />
                </motion.div>
              </>
            }
            extraContent={
              <a href="#" className="text-black font-semibold">
                Explore Invoicing Tools →
              </a>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
