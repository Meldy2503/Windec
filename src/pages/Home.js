import React from "react";
import LandingPage from "../components/homePage/landingPage/index";
import HowWeWork from "../components/homePage/howWeWork/index";
import ViewOurProjects from "../components/homePage/viewOurProjects/index";
import Features from "../components/homePage/features/index";
import Reviews from "../components/homePage/reviews/index";
import FAQ from "../components/homePage/FAQ/index";
import SendInquiry from "../components/homePage/sendInquiry/index";
import OurBlog from "../components/homePage/ourBlog/index";

const Home = () => {
   return (
       <div>
           <LandingPage />
           <HowWeWork />
           <ViewOurProjects />
           <Features />
           <Reviews />
           <FAQ />
           <SendInquiry />
           <OurBlog />   
       </div>
   )
}

export default Home;