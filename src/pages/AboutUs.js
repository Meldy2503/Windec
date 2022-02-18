import React from "react";
import Intro from "../components/aboutUs/Intro/index";
import OurProcess from "../components/aboutUs/ourProcess/index";
import WhoWeAre from "../components/aboutUs/whoWeAre/index";

const AboutUs = () => {
   return (
       <div>
           <Intro />
           <WhoWeAre />
           <OurProcess />
       </div>
   )
}

export default AboutUs;