import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import {
  Title,
  Container,
  LeftContent,
  RightContent,
  Img1,
  Img2,
} from "./Styled";

function ViewOurProjects() {
  return (
    <MainContainer bgco="#FFF">
      <Title data-aos="fade-up">
        <h2>View our projects</h2>
        <li>
          <a href="/portfolio">View more</a>
          <CgArrowLongRight />
        </li>
      </Title>
      <Container>
        <LeftContent data-aos="fade-right">
          <div>
            <h3>Workhub Office Webflow Webflow Design</h3>
            <p>Lorem ipsum dolor sit amet conselit. Minus blanditiis elit.</p>
            <li>
              <a href="/portfolio">View project</a>
              <CgArrowLongRight />
            </li>
          </div>
        </LeftContent>

        <RightContent>
          <Img1 data-aos="fade-left">
            <div>
              <h3>Unisaas Website Design</h3>
              <li>
                <a href="/portfolio">View portifolio</a>
                <CgArrowLongRight />
              </li>
            </div>
          </Img1>
          <Img2 data-aos="fade-left"></Img2>
        </RightContent>
      </Container>
    </MainContainer>
  );
}

export default ViewOurProjects;
