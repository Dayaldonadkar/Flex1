import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

import FlexFooter from "../Components/FlexFooter";

import Navbar2 from "../Components/Navbar2";
import FeaturePage3 from "../Components/FeaturePage3";
import Team1 from "../Components/Team1";
import Flex1 from "../Components/Flex1";
import RichText1 from "../Components/RichText1";

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar2
          img="https://shuffle.dev/asitrastudio-assets/logos/logo-asi.svg"
          li1="About"
          li2="Services"
          li3="Projects"
          li4="Contact us"
          button1="Login"
          button2="Sign In"
        />
      </div>

      <Flex1 />
      <FeaturePage3 />
      <RichText1 />
      <Team1 />
      <FlexFooter
        img="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
        h1="Features"
        h2="Solutions"
        h3="Pricing"
        h4="Tutorials"
        h5="Updates"
        p1="Blog"
        p2="Newslettter"
        p3="Help Centre"
        p4="Careers"
        p5="Support"
      />
    </div>
  );
};

export default Homepage;
