import React from 'react';
import { LeftContent, RightContent } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import img11 from "../../images/img11.svg";



function WhoWeAre() {
  return (
  <MainContainer>
      <ContentContainer>
          <LeftContent>
              <div>
              <h6>
                  About us
              </h6>
              <h1>
                   Our designs solve problems
              </h1>
               <p>
                  Lorem ipsum dolor sit amet, consect etur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
               </p>
              </div>
          </LeftContent>
          <RightContent>
          <div>
              <h6>
                  About us
              </h6>
              <h1>
                   Our designs solve problems
              </h1>
               <p>
                  Lorem ipsum dolor sit amet, consect etur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
               </p>
              </div>
          </RightContent>
      </ContentContainer>
      <ImgContainer>
          <img src={ img11 } alt="img11" />
      </ImgContainer>
  </MainContainer>
  )
}

export default WhoWeAre;
