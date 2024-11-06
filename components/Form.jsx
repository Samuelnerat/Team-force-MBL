import Button from "./Button";

const Form = () => {
  return (
    <section className="main-container lg:mx-24 mx-5">
      <form
        className="relative py-10 px-4 rounded-[40px] -mb-footer overflow-hidden bg-[#6d38c3]"
      >
        <div className="relative flex flex-col gap-3 max-w-[600px] mx-auto items-center">
          <input type="hidden" name="form-name" value="mbbl-contact" />
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
            className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none  w-64 lg:w-96  p-2"
            placeholder="Email address"
            required
          />
          <input
            name="phone"
            type="text"
            className="bg-[#d5c5ee] rounded-full h-10 border-none outline-none  w-64 lg:w-96  p-2"
            placeholder="Phone number"
            required
          />
          <textarea
            name="message"
            className="bg-[#d5c5ee] rounded-xl h-32 border-none outline-none  w-64 lg:w-96  p-2"
            placeholder="Enter your message"
            required
          ></textarea>
          <Button className="w-fit">Get Started Now</Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
