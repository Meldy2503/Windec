import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { Title, Container, LeftContent, RightContent } from "./Styled";
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";
import img4 from "../../images/img4.svg";

function ViewOurProjects() {
  return (
    <MainContainer bgco="#FFF">
      <Title>
        <h2>View our projects</h2>
        <li>
          <a href="/portfolio">View more</a>
          <CgArrowLongRight />
        </li>
      </Title>
      <Container>
        <LeftContent>
          <img src={img2} alt="img2" />
          <span>
            <div>
              <h3>Workhub Office Webflow Webflow Design</h3>
              <p>Lorem ipsum dolor sit amet conselit. Minus blanditiis elit.</p>
              <li>
                <a href="/portfolio">View project</a>
                <CgArrowLongRight />
              </li>
            </div>
          </span>
        </LeftContent>

        <RightContent>
          <img classname="img3" src={img3} alt="img3" />
          <span>
            <div>
              <h3>Unisaas Website Design</h3>
              <li>
                <a href="/portfolio">View portifolio</a>
                <CgArrowLongRight />
              </li>
            </div>
          </span>
          <img classname="img4" src={img4} alt="img4" />
        </RightContent>
      </Container>
    </MainContainer>
  );
}

export default ViewOurProjects;
