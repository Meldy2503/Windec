import React from 'react';
import { LeftContent, RightContent } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";
import img1 from "../../images/img1.svg";



function LandingPage() {
  return (
  <MainContainer bgco= "#1C1E53">
      <ContentContainer pt= "14rem">
          <LeftContent>
              <div>
              <h6>
                  About us
              </h6>
              <h1>
                   Our designs solve problems
              </h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
               </p>
              </div>
          </LeftContent>
          <RightContent>
                <img src={img1} alt="img1" />
          </RightContent>
      </ContentContainer>
  </MainContainer>
  )
}

export default LandingPage;

