import React from "react";
import Card from "./Card";

const Team1 = () => {
  return (
    <div className="flex justify-center">
      <div className="px-5 sm:w-[80%] py-10">
        <div>
          <h1 className="text-4xl md:text-5xl text-[#111827] font-bold mb-5  leading-tight tracking-tighter">
            Our team is the best in the business.
          </h1>
          <p className="mb-14 md:mb-24 text-lg md:text-xl text-[#6B7280]">
            Highly proffesional and capable of running your business across all
            digital channels
          </p>
        </div>

        <div className="space-y-16 pl-5 sm:pl-0">
          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%] lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar1.png"
                name="Maccauley Herring"
                designation="CEO & Founder"
                description="Dance is the hidden language of the soul"
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar2.png"
                name="Ivan Mathews"
                designation="CTO"
                description="Everything you’ve ever wanted is on the other side of fear."
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%] hidden lg:block">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar3.png"
                name="Elen Benitez"
                designation="CPO"
                description="The only way to do great work is to love what you do."
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%] lg:w-[30%] lg:hidden">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar3.png"
                name="Elen Benitez"
                designation="CPO"
                description="The only way to do great work is to love what you do."
              />
            </div>
            <div className="sm:w-[49%] lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar4.png"
                name="Kacy Wede"
                designation="Customer Success"
                description="There are no traffic jams along the extra mile."
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%] hidden lg:block">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar5.png"
                name="Alya Levine"
                designation="Backend Developer"
                description="The mind is everything. What you think you become."
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%] hidden lg:block">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar6.png"
                name="Rosemary Hernadez"
                designation="CEO & Founder"
                description="Whether you think you can or you think you can’t, you’re right."
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0 lg:hidden">
            <div className="sm:w-[49%] lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar6.png"
                name="Rosemary Hernadez"
                designation="CEO & Founder"
                description="Whether you think you can or you think you can’t, you’re right."
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar5.png"
                name="Alya Levine"
                designation="Backend Developer"
                description="The mind is everything. What you think you become."
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%] lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar7.png"
                name="Theo Morales"
                designation="Frontend Developer"
                description="I would die rather die than a boredom"
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar8.png"
                name="Ishmael Dunlop"
                designation="Product Designer"
                description="Everything you’ve ever wanted is on the other side of fear."
              />
            </div>
            <div className="sm:w-[49%]  lg:w-[30%] hidden lg:block"></div>
          </div>

          {/* <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar3.png"
                name="Elen Benitez"
                designation="CPO"
                description="The only way to do great work is to love what you do."
              />
            </div>
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar2.png"
                name="Ivan Mathews"
                designation="CTO"
                description="Everything you’ve ever wanted is on the other side of fear."
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar4.png"
                name="Kacy Wede"
                designation="Customer Success"
                description="There are no traffic jams along the extra mile."
              />
            </div>
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar5.png"
                name="Alya Levine"
                designation="Backend Developer"
                description="The mind is everything. What you think you become."
              />
            </div>
          </div>

          <div className="sm:flex sm:justify-between space-y-16 sm:space-y-0">
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar6.png"
                name="Rosemary Hernadez"
                designation="CEO & Founder"
                description="Whether you think you can or you think you can’t, you’re right."
              />
            </div>
            <div className="sm:w-[49%]">
              <Card
                img="https://shuffle.dev/flex-ui-assets/images/teams/avatar7.png"
                name="Theo Morales"
                designation="Frontend Developer"
                description="I would die rather die than a boredom"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team1;
