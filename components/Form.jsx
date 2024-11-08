// import { useState } from "react";
// import Button from "./Button";

// const Form = () => {
//   const [status, setStatus] = useState(""); 

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 

//     const form = e.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/xbljoyyj", {
//         method: "POST",
//         body: formData,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (response.ok) {
//         setStatus("Thank you for your submission!");
//         form.reset(); 
//       } else {
//         setStatus("There was an error with your submission. Please try again.");
//       }
//     } catch (error) {
//       setStatus("There was an error with your submission. Please try again.");
//     }
//   };

//   return (
//     <section className="lg:mx-24 mx-5">
//       <form
//         name="MBL-Form"
//         method="POST"
//         action="https://formspree.io/f/xbljoyyj"
//         onSubmit={handleSubmit} // Custom submit handler
//         className="relative py-10 px-4 rounded-[40px] -mb-footer overflow-hidden bg-[#6d38c3]"
//       >
//         <div className="relative flex flex-col gap-3 max-w-[600px] mx-auto items-center">
//           <input type="hidden" name="form-name" value="MBL-Form" />

//           <input
//             name="name"
//             type="text"
//             className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
//             placeholder="Full name"
//             required
//           />
//           <input
//             name="email"
//             type="email"
//             className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
//             placeholder="Email address"
//             required
//           />
//           <input
//             name="phone"
//             type="text"
//             className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
//             placeholder="Phone number"
//             required
//           />
//           <textarea
//             name="message"
//             className="bg-[#d5c5ee] rounded-xl h-32 border-none outline-none w-64 lg:w-96 p-2"
//             placeholder="Enter your message"
//             required
//           ></textarea>

//           <Button text="Get Started Now" className="w-fit px-5 text-white py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a]" />

//           
//           {status && <p className="mt-4 text-white">{status}</p>}
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;


import { useRef } from "react";
import Button from "./Button";

const Form = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    formRef.current.reset(); 
  };

  return (
    <div className="lg:mx-80 md:mx-24 mx-5 ">
      <form
        ref={formRef}
        name="MBL-Form"
        method="POST"
        action="https://formspree.io/f/xbljoyyj"  
        onSubmit={handleSubmit}
        className="relative py-10 px-4 rounded-[40px] -mb-footer overflow-hidden bg-[#6d38c3]"
      >
        <div className="relative flex flex-col gap-3 max-w-[600px] mx-auto items-center">
          <input type="hidden" name="form-name" value="MBL-Form" />

          <input
            name="name"
            type="text"
            className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
            placeholder="Full name"
            required
          />
          <input
            name="email"
            type="email"
            className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
            placeholder="Email address"
            required
          />
          <input
            name="phone"
            type="text"
            className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none w-64 lg:w-96 p-2"
            placeholder="Phone number"
            required
          />
          <textarea
            name="message"
            className="bg-[#d5c5ee] rounded-xl h-32 border-none outline-none w-64 lg:w-96 p-2"
            placeholder="Enter your message"
            required
          ></textarea>

          <Button text="Get Started Now" className="w-fit px-5 text-white py-2 bg-gradient-to-b from-[#9cf725] to-[#47a93a]" />
        </div>
      </form>
    </div>
  );
};

export default Form;
