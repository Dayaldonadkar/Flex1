import React from "react";
import bg from "../Images/pattern-light-big.svg";

const FlexFooter = ({ h1, h2, h3, h4, h5, p1, p2, p3, p4, p5 }) => {
  return (
    <div
      className="flex justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[90%] sm:w-[80%] lg:w-[90%] xl2:w-[70%] lg:flex lg:justify-between">
        <div className=" lg:w-[25%]">
          <div className="py-10">
            <img
              src="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
              alt="logo"
            />
          </div>

          <p className="md:text-lg text-[#9E9E9E] w-[80%] lg:w-[100%]">
            Launch your own Software As A Service Application with Flex
            Solutions.
          </p>
        </div>

        <div className="py-10 lg:w-[15%]">
          <h1 className="pb-5 font-bold text-lg text-[#111827]">Product</h1>
          <div className="text-[#6B7280] font-medium space-y-3">
            <p>{h1}</p>
            <p>{h2}</p>
            <p>{h3}</p>
            <p>{h4}</p>
            <p>{h5}</p>
          </div>
        </div>

        <div className="py-10 lg:w-[15%]">
          <h1 className="pb-5 font-bold text-lg text-[#111827]">Remaining</h1>
          <div className="text-[#6B7280] font-medium space-y-3">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>{p5}</p>
          </div>
        </div>

        <div className="pb-20 lg:py-10">
          <h1 className="pb-5 font-bold text-lg text-[#111827]">Newsletter</h1>
          <div className="flex flex-col space-y-5">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#E5E7EB
                w-full py-4 lg:py-2 shadow-md rounded-lg px-3 placeholder:text-[#6B7280] focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button className="py-4 lg:py-2 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-md rounded-lg text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexFooter;
