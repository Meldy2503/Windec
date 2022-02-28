import React from "react";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { Contents } from "./heroStyled";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <MainContainer>
      <ContentContainer>
        <Contents data-aos="fade-up" data-aos-duration="500">
          <p>What we created</p>
          <h2>Our Work Portfolio</h2>
          <p>
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <span>
            <a href="www.facebook.com" target="_blank">
              <FaFacebook className="icons" />
            </a>
            <a href="www.twitter.com" target="_blank">
              <FaTwitter className="icons" />
            </a>
            <a href="www.instagram.com" target="_blank">
              <FaInstagram className="icons" />
            </a>
            <a href="www.linkedin.com" target="_blank">
              <FaLinkedin className="icons" />
            </a>
          </span>
        </Contents>
      </ContentContainer>
    </MainContainer>
  );
}

export default HeroSection;
