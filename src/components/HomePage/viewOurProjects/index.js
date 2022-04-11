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
import { Link } from "react-router-dom";

function ViewOurProjects() {
  return (
    <MainContainer bgco="#FFF">
      <Title data-aos="fade-up">
        <h2>View our projects</h2>
        <li>
          <Link to="/portfolio">View more</Link>
          <CgArrowLongRight />
        </li>
      </Title>
      <Container>
        <LeftContent data-aos="fade-right">
          <div>
            <h3>Workhub Office Webflow Webflow Design</h3>
            <p>Trust us to give you nothing but the best.</p>
            <li>
              <Link to="/portfolio">View project</Link>
              <CgArrowLongRight />
            </li>
          </div>
        </LeftContent>

        <RightContent>
          <Img1 data-aos="fade-left">
            <div>
              <h3>Unisaas Website Design</h3>
              <li>
                <Link to="/portfolio">View portifolio</Link>
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
