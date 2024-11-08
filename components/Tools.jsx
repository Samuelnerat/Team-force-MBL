import React from 'react';

const Tools = () => {
  return (
    <div className=" w-full">
        <div className=' flex flex-col items-center lg:px-16 main-container pb-10 md:pb-12 lg:pb-24'>
            <article  className="max-w-[1000px] w-full mx-auto bg-[#FBECEF] rounded-[30px] min-h-[200px] mt-10 md:mt-12 lg:mt-24 p-6 lg:p-12">
                <h3 className="text-3xl font-medium text-black mb-6">More free tools than you can handle</h3>
                <ul className="list-disc grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 ml-4">
                    <li className="text-base text-black font-medium w-fit">Invoicing</li>
                    <li className="text-base text-black font-medium w-fit">Online Checkout</li>
                    <li className="text-base text-black font-medium w-fit">Point-Of-Sale</li>
                    <li className="text-base text-black font-medium w-fit">Online Food Ordering</li>
                    <li className="text-base text-black font-medium w-fit">ICard Vault</li>
                    <li className="text-base text-black font-medium w-fit">Customer Portal</li>
                    <li className="text-base text-black font-medium w-fit">Inventory</li>
                    <li className="text-base text-black font-medium w-fit">Virtual Terminal</li>
                    <li className="text-base text-black font-medium w-fit">Recurring Plans</li>
                    <li className="text-base text-black font-medium w-fit">Payment Links</li>
                    <li className="text-base text-black font-medium w-fit">SMS Payments</li>
                    <li className="text-base text-black font-medium w-fit">QR Codes</li>
                </ul>
            </article>
        </div>
      
    </div>
  );
}

export default Tools;
