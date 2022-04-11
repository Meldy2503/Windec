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
              Our expert web developers aim to create engaging websites while
              providing a fun, easy and productive experience for you. To better
              comprehend your vision, our staff will attentively note and listen
              to your ideas and needs and help bring them to life.
            </p>
          </Texts>
        </LeftContent>
        <RightContent data-aos="fade-up">
          <Texts>
            <h1>Our Philosophy</h1>
            <p>
              Before suggesting or providing any digital solution we take due
              diligence to understand our client's brand, their project and
              their target audience. Each piece is meticulously created and
              thoroughly examined to guarantee that it meets or exceeds
              expectations.
            </p>
          </Texts>
        </RightContent>
      </ContentContainer>
      <ImgContainer data-aos="fade-up" />
    </MainContainer>
  );
}

export default WhoWeAre;
