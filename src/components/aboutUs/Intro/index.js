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
        <LeftContent data-aos="fade-up">
          <div>
            <h6>About us</h6>
            <h1>Our designs solve problems</h1>
            <p>
              With the expertise of our dedicated team,Windec takes your
              business to a whole new level by blending innovative tactics that
              provide digital experiences like no other.
            </p>
          </div>
        </LeftContent>
        <RightContent data-aos="fade-up">
          <img src={img10} alt="img1" />
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default Intro;
