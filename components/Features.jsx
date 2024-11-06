import React from 'react';
import Card from './Card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      <div  className="grid grid-cols-1 lg:grid-cols-2 gap-6  lg:p-6 mx-5 lg:mx-32">
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
              <div
                data-anim="card-bg-img"
                className="absolute bottom-[10%] xl:bottom-[20%]  lg;left-[45%] w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
              >
                <Image
                  fill
                  alt=""
                  src="/Qr-code.png"
                />
              </div>
              <div
                data-anim="card-bg-img"
                className="absolute hidden lg:block bottom-[50px] xl:bottom-[0%] right-[-2%] lg:right-[15%] w-[100px] lg:w-[200px] h-[100px] lg:h-[200px]"
              >
                <Image
                  fill
                  alt=""
                  src="/pos.png"
                />
              </div>
            </>
          } />
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
          description={<>... or copy-paste the link.</>
          }
          variant="two"
          imageContent={
            <>
              <div
                data-anim="card-bg-img"
                 className="hidden xl:block absolute bottom-[30px] right-[0] w-[280px] h-[240px]"
              >
                <Image
                  fill
                  alt=""
                  src="/circle.png"
                />
              </div>
              <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[-30%] md:bottom-[-10%] xl:bottom-[0%] right-[-40%] md:right-[-40%] xl:left-[30%] w-[250px] h-[250px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/message.png"
                  />
                </div>
            </>
          } />
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
                <div
                  data-anim="card-bg-img"
                  className="absolute bottom-[20%] lg:bottom-[10%] right-[-15%] lg:right-[10%] xl:right-[38%] w-[100px] h-[108px] lg:w-[200px] lg:h-[208px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/recipet.png"
                  />
                </div>
                <div
                  data-anim="card-bg-img"
                  className="absolute hidden lg:block lg:bottom-[-10%] xl:bottom-[-5%] lg:right-[-30%] xl:right-[7%] w-[311px] h-[364px]"
                >
                  <Image
                    fill
                    alt=""
                    src="/shoe.png"
                  />
                </div>
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
