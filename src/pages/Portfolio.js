import React from "react";
import HeroSection from "../components/portfolio/heroSection/index";
import Templates from "../components/portfolio/templates/index";
import CTA from "../components/portfolio/CTA/index";



const Portfolio = () => {
   return (
       <div>
           <HeroSection />
           <Templates />
           <CTA />
       </div>
   )
}

export default Portfolio;