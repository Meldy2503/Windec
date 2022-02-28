import React from "react";
import { LeftContent, RightContent } from "./Styled";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import img10 from "../../images/img10.svg";

function Intro() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer pt="14rem">
        <LeftContent data-aos="fade-up" data-aos-duration="500">
          <div>
            <h6>About us</h6>
            <h1>Our designs solve problems</h1>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipi scing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </LeftContent>
        <RightContent data-aos="fade-up" data-aos-duration="800">
          <img src={img10} alt="img1" />
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default Intro;
