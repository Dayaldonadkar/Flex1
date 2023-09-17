import React from "react";

import FeaturesComponent2 from "./FeatureComponent2";

const Feature3 = () => {
  return (
    <div className="space-y-16 md:flex md:justify-center lg:flex lg:items-center lg:space-y-0 pb-20">
      <div className="space-y-16 md:space-y-16 lg:space-y-6  md:items-center  md:flex-row lg:flex lg:flex-row  md:w-[100%] lg:w-[100%]  lg:space-x-12">
        <div className="space-y-8  md:w-[100%]  xl:flex xl:flex-col xl:justify-between xl:h-[100%]">
          <div className="">
            <FeaturesComponent2
              feature=" Measure your performance"
              description="Stay connected with your team and make quick decisions wherever you are"
            />
          </div>
          <div className="">
            <FeaturesComponent2
              feature="Custom analytics"
              description="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
            />
          </div>

          <div className="">
            <FeaturesComponent2
              feature="Custom analytics"
              description="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
            />
          </div>
        </div>

        <div className="pt-20 md:pt-0  xl2:w-[50%]  xl2:flex xl2:justify-end">
          <div className="relative">
            <img
              className="sm:w-full"
              src="https://shuffle.dev/flex-ui-assets/images/features/stock2.png"
              alt=""
            />

            <img
              className="absolute -top-16 -left-16 "
              src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg"
              alt=""
            />

            <img
              className="absolute -right-3 -bottom-7  w-[20%] lg:w-[25%] xl:w-[30%] xl2:-right-3"
              src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
