// 'use client';
// import { motion } from 'framer-motion';
// import dynamic from 'next/dynamic';

// const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
// const Features = dynamic(() => import("@/components/Features"), { ssr: false });
// const Form = dynamic(() => import("@/components/Form"), { ssr: false });
// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
// const PaymentMethods = dynamic(() => import("@/components/PaymentMethods"), { ssr: false });
// const Services = dynamic(() => import("@/components/Services"), { ssr: false });
// const StartProcess = dynamic(() => import("@/components/StartProcess"), { ssr: false });
// const Testimonial = dynamic(() => import("@/components/Testimonial"), { ssr: false });
// const Tools = dynamic(() => import("@/components/Tools"), { ssr: false });
// const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

// export default function Home() {
//   return (
//     <main className="overflow-hidden">
//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Hero />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Features />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <PaymentMethods />
//       </motion.section>

//       <motion.section 
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Services />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Tools />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <StartProcess />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Testimonial />
//       </motion.section>

//       <motion.section 
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <FAQ />
//       </motion.section>

//       <motion.section
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <Form />
//       </motion.section>

//       {/* <motion.footer
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//       <Footer />
//       </motion.footer> */}
//     </main>
//   );
// }


'use client';
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import PaymentMethods from "@/components/PaymentMethods";
import Services from "@/components/Services";
import StartProcess from "@/components/StartProcess";
import Testimonial from "@/components/Testimonial";
import Tools from "@/components/Tools";


 function Home() {
  return (    
    <main className="">
     <Hero/>
     <Features />
     <PaymentMethods />
     <Services />
     <Tools />
     <StartProcess />
     <Testimonial />
     <FAQ />
     <Form />
    </main>
  );
}
export default Home;