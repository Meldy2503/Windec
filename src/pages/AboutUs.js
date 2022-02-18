import React from "react";
import Intro from "../components/aboutUs/Intro/index";
import WhoWeAre from "../components/aboutUs/whoWeAre/index";
import OurProcess from "../components/aboutUs/ourProcess/index";
import MissionVission from "../components/aboutUs/missionVision/index";
import Benefits from "../components/aboutUs/benefits/index";


const AboutUs = () => {
   return (
       <div>
           <Intro />
           <WhoWeAre />
           <OurProcess />
           <MissionVission />
           <Benefits />
       </div>
   )
}

export default AboutUs;