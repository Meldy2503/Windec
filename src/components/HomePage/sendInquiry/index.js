import React from 'react';
import { LeftContent, RightContent } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
// import { Button } from "../../reusableComponents/ButtonStyled";
// import img6 from "../../images/img6.svg";




function SendInquiry() {
  return (
  <MainContainer bgco= "#fff">
      <ContentContainer pt= "0">
          <LeftContent>
              {/* <img src={img6} alt="bg-img" /> */}
              <div>
              <h1>
              Building stellar websites for early startups
              </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
              </div>
          </LeftContent>
          <RightContent>
            
          </RightContent>
      </ContentContainer>
  </MainContainer>
  )
}

export default SendInquiry;

