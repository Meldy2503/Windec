import React from 'react';
import { MainContainer, ContentContainer, LeftContent, RightContent  } from "./LandingPageStyled";
import { Button } from "../../styles/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";
import img1 from "../../images/img1.svg";



function LandingPage() {
  return (
  <MainContainer>
      <ContentContainer>
          <LeftContent>
              <h1>
                 Building stellar websites for early startups 
              </h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia blanditiis adipisicing elit.
              </p>
              <span>
                  <Button>View our work</Button>
                  <li>
                      <a href="#">View Pricing</a>
                      <CgArrowLongRight />
                  </li>
              </span>
          </LeftContent>
          <RightContent>
                <img src={img1} alt="img1" />
          </RightContent>
      </ContentContainer>
  </MainContainer>
  
  
  )
}

export default LandingPage;

