import React from "react";
import { LeftContent, RightContent, Texts, ImgContainer } from "./Styled";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";

function WhoWeAre() {
  return (
    <MainContainer bgco="#FFF">
      <ContentContainer pb="5rem" bgcon="#F4F5F5">
        <LeftContent data-aos="fade-up">
          <Texts>
            <h6>Who we are</h6>
            <h1>Goal focussed</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Texts>
        </LeftContent>
        <RightContent data-aos="fade-up">
          <Texts>
            <h1>Continuous improvement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Texts>
        </RightContent>
      </ContentContainer>
      <ImgContainer data-aos="fade-up" />
    </MainContainer>
  );
}

export default WhoWeAre;
