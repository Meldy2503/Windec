import React from "react";
import LandingPage from "../components/HomePage/LandingPage/index";
import HowWeWork from "../components/HomePage/howWeWork/index";
import ViewOurProjects from "../components/HomePage/viewOurProjects/index";
import Features from "../components/HomePage/features/index";
import Reviews from "../components/HomePage/reviews/index";
import FAQ from "../components/HomePage/FAQ/index";
import SendInquiry from "../components/HomePage/sendInquiry/index";
import OurBlog from "../components/HomePage/ourBlog/index";

const Home = (props) => {
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
  );
};

export default Home;
