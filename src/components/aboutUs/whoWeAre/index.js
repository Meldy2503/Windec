import React from 'react';
import { LeftContent, RightContent, Texts, ImgContainer } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import img11 from "../../images/img11.svg";



function WhoWeAre() {
  return (
  <MainContainer>
      <ContentContainer pb="5rem">
          <LeftContent>
              <Texts>
              <h6>
                 Who we are
              </h6>
              <h1>
                  Goal focussed 
              </h1>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
              </Texts>
          </LeftContent>
          <RightContent>
          <Texts>
              <h1>
                   Continuous improvement
              </h1>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
              </Texts>
          </RightContent>
      </ContentContainer>
      <ImgContainer>
          <img src={ img11 } alt="img11" />
      </ImgContainer>
  </MainContainer>
  )
}

export default WhoWeAre;
