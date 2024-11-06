'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const Form = dynamic(() => import("@/components/Form"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const PaymentMethods = dynamic(() => import("@/components/PaymentMethods"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const StartProcess = dynamic(() => import("@/components/StartProcess"), { ssr: false });
const Testimonial = dynamic(() => import("@/components/Testimonial"), { ssr: false });
const Tools = dynamic(() => import("@/components/Tools"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Features />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <PaymentMethods />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Services />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Tools />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <StartProcess />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Testimonial />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <FAQ />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Form />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
      <Footer />
      </motion.div>
    </main>
  );
}
