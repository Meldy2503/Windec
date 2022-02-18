import React from "react";
import Intro from "../components/aboutUs/Intro/index";
import WhoWeAre from "../components/aboutUs/whoWeAre/index";
import OurProcess from "../components/aboutUs/ourProcess/index";
import MissionVission from "../components/aboutUs/missionVision/index";

const AboutUs = () => {
   return (
       <div>
           <Intro />
           <WhoWeAre />
           <OurProcess />
           <MissionVission />
       </div>
   )
}

export default AboutUs;