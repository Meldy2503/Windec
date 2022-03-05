import React from "react";
import { LeftContent, RightContent } from "./Styled";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";
import img1 from "../../images/img1.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <MainContainer bgco="#1C1E53">
      <ContentContainer pt="23rem" pb="23rem">
        <LeftContent data-aos="fade-right">
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia
            blanditiis adipisicing elit.
          </p>
          <span>
            <Button to="/portfolio">View our work</Button>
            <li>
              <Link to="/pricing">View Pricing</Link>
              <CgArrowLongRight />
            </li>
          </span>
        </LeftContent>
        <RightContent data-aos="fade-left">
          <img src={img1} alt="img1" />
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default LandingPage;
