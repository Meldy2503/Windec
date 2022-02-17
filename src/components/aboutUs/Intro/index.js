import React from 'react';
import { LeftContent, RightContent } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import img10 from "../../images/img10.svg";



function Intro() {
  return (
  <MainContainer bgco= "#fff">
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
                <img src={img10} alt="img1" />
          </RightContent>
      </ContentContainer>
  </MainContainer>
  )
}

export default Intro;

