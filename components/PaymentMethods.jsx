// import React from 'react';

// const PaymentMethods = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default PaymentMethods;


"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
// import logoData from "./PaymentMethods.json";

const logoData = [
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-5_yqqawn.png",
    "width": 54,
    "height": 54,
    "position": { "top": "120px", "left": "40px" },
    "line": { "top": "20%", "left": "-350%", "rotate": "10deg" },
    "name": "sepa"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-6_oxqyx8.png",
    "width": 74,
    "height": 74,
    "position": { "top": "40px", "left": "280px" },
    "line": { "top": "0%", "left": "-170%", "rotate": "21deg" },
    "name": "samsung"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-7_ru4cqa.png",
    "width": 64,
    "height": 64,
    "position": { "top": "80px", "left": "520px" },
    "line": { "top": "0%", "left": "-20%", "rotate": "40deg" },
    "name": "giro"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-16_tocoqw.png",
    "width": 48,
    "height": 48,
    "position": { "top": "80px", "left": "740px" },
    "line": { "top": "-10%", "left": "70%", "rotate": "-50deg" },
    "name": "drynet"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-15_djneaz.png",
    "width": 65,
    "height": 65,
    "position": { "top": "20px", "left": "970px" },
    "line": { "top": "-20%", "left": "75%", "rotate": "-30deg" },
    "name": "neo"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-14_kvytxj.png",
    "width": 46,
    "height": 46,
    "position": { "top": "40px", "left": "1200px" },
    "line": { "top": "-10%", "left": "69%", "rotate": "-15deg" },
    "name": "ripple"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-4_gb1ex8.png",
    "width": 86,
    "height": 86,
    "position": { "top": "240px", "left": "180px" },
    "line": { "top": "60%", "left": "-210%", "rotate": "-2deg" },
    "name": "discover"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-13_awthxs.png",
    "width": 76,
    "height": 76,
    "position": { "top": "140px", "left": "1090px" },
    "line": { "top": "30%", "left": "80%", "rotate": "-8deg" },
    "name": "tubepay"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-11_bpp4wm.png",
    "width": 60,
    "height": 60,
    "position": { "top": "280px", "left": "900px" },
    "line": { "top": "80%", "left": "60%", "rotate": "10deg" },
    "name": "gpay"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-12_myyzyp.png",
    "width": 80,
    "height": 80,
    "position": { "top": "230px", "left": "1200px" },
    "line": { "top": "64%", "left": "70%", "rotate": "2deg" },
    "name": "express"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-10_coezdf.png",
    "width": 70,
    "height": 70,
    "position": { "top": "400px", "left": "1170px" },
    "line": { "top": "130%", "left": "80%", "rotate": "15deg" },
    "name": "applepay"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-9_sxzzu1.png",
    "width": 86,
    "height": 86,
    "position": { "top": "410px", "left": "890px" },
    "line": { "top": "130%", "left": "70%", "rotate": "30deg" },
    "name": "paypal"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-8_agao0d.png",
    "width": 54,
    "height": 54,
    "position": { "top": "370px", "left": "740px" },
    "line": { "top": "118%", "left": "65%", "rotate": "45deg" },
    "name": "mastercard"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-1_txmpvw.png",
    "width": 80,
    "height": 80,
    "position": { "top": "360px", "left": "450px" },
    "line": { "top": "100%", "left": "-50%", "rotate": "-40deg" },
    "name": "wechat"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307178/logo-2_vy2jmt.png",
    "width": 65,
    "height": 65,
    "position": { "top": "400px", "left": "240px" },
    "line": { "top": "110%", "left": "-195%", "rotate": "-24deg" },
    "name": "visa"
  },
  {
    "src": "https://res.cloudinary.com/dexg5uy3d/image/upload/v1725307177/logo-3_w05rtq.png",
    "width": 54,
    "height": 54,
    "position": { "top": "380px", "left": "20px" },
    "line": { "top": "110%", "left": "-360%", "rotate": "-14deg" },
    "name": "smiley"
  }
]



const PaymentMethods = () => {
  const payemntMethodsRef = useRef(null);

  // Define the window width state
  const [windowWidth, setWindowWidth] = useState(0);

  const containerWidth = 1290;
  const containerHeight = 480;

  // Handle resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); 
      return () => window.removeEventListener("resize", handleResize);
    }
    handleResize(); // For server-side rendering case, it runs once
  }, []);

  const width = windowWidth >= containerWidth ? containerWidth : windowWidth;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  return (
    <section
      className="mt-20 flex flex-col items-center mx-auto  w-full lg:mb-0"
    >
      <div className="flex flex-col items-center gap-3 lg:mb-8">
        <h2 className="text-center text-5xl text-black font-medium">
          All major <br className="hidden lg:block" /> payment methods
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          We&apos;ve got all your payments covered
        </p>
      </div>

      <figure
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          position: "relative",
          transform: `scale(${width / containerWidth})`,
          transformOrigin: "center",
          aspectRatio: "1290 / 480",
        }}
      >
      
        <div
          style={{
            position: "absolute",
            top: `${centerY - 75}px`, 
            left: `${centerX - 75}px`,
          }}
        >
          <motion.img
            src="/center-Image.png"
            alt=""
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            }}
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Payment Method Lines */}
          {logoData.map((logo, index) => (
            <motion.div
              key={index}
              style={{
                height: "1px",
                backgroundColor: "#aee87c",
                position: "absolute",
                width: `${Math.abs(
                  Number(logo.position.left.replace("px", "")) - centerX
                )}px`,
                left: `${logo.line.left}`,
                top: `${logo.line.top}`,
                rotate: `${logo.line.rotate}`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                data-anim={`payment-methods-circle-${index}`}
                style={{
                  display: "block",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#aee87c",
                  width: "7px",
                  height: "7px",
                  borderRadius: "5px",
                }}
                whileHover={{
                  scale: 1.5,
                  rotate: 180,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Payment Method Logos */}
        {logoData.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={`Logo ${index}`}
            style={{
              position: "absolute",
              width: `${logo.width}px`,
              height: `${logo.height}px`,
              top: `calc(${logo.position.top})`,
              left: `calc(${logo.position.left})`,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
          />
        ))}
      </figure>

      {/* SVG Wave at the Bottom */}
      <svg
        className="w-full "
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f2f0f6"
          fillOpacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,85.3C960,85,1056,43,1152,21.3C1248,0,1344,0,1392,0L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default PaymentMethods;
