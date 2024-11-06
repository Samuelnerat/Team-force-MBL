import React from "react";
import { motion } from 'framer-motion';

const Button = ({ text, className, ...props }) => {
  return (
    <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
      {...props}
      className={`cursor-pointer rounded-[0.563rem] px-2 py-1 tracking-wide transition-all duration-300 ease-linear  ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
