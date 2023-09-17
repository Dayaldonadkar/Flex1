import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Card = ({ name, designation, description, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div className="space-y-1 py-3">
        <h1 className="text-[#1F2937] text-lg font-semibold">{name}</h1>
        <p className="text-green-500 text-lg font-mediu ">{designation}</p>
      </div>
      <p className="mb-4 text-[#6B7280] sm:h-12 md:w-[85%] lg:w-[95%]">
        {description}
      </p>
      <div className="flex space-x-3">
        <FacebookIcon style={{ color: "gray" }} />
        <TwitterIcon style={{ color: "gray" }} />
        <InstagramIcon style={{ color: "gray" }} />
        <LinkedInIcon style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default Card;
