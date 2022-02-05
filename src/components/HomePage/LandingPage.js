import React from 'react';
import { MainContainer, ContentContainer, LeftContent, RightContent  } from "./LandingPageStyled";
import { Button } from "../styles/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";


function LandingPage() {
  return (
  <MainContainer>
      <ContentContainer>
          <LeftContent>
              <h2>
                 Building stellar websites for early startups 
              </h2>
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

          </RightContent>
      </ContentContainer>
  </MainContainer>
  
  
  )
}

export default LandingPage;

