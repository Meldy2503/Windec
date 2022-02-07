import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { LeftContent } from "./Section1Styled"



function Section1() {
  return (
  <MainContainer>
      <ContentContainer pt= "12rem">
      <LeftContent >
              <h2>
                 How we work
              </h2>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis elit.
              </p>
              <li>
                      <a href="#">View Pricing</a>
                      <CgArrowLongRight />
              </li>
      </LeftContent>     

      </ContentContainer>
      
  </MainContainer>
  );
}

export default Section1;
