import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { Span, LeftContent, RightContent } from "./Section2Style";
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";
import img4 from "../../images/img4.svg";



function Setion2() {
  return (
    <MainContainer bgco= "#FFF">
        <Span>
              <h2>View our projets</h2>
              <li>
                  <a href="#">View more</a>
                  <CgArrowLongRight />
              </li> 
        </Span>
        <ContentContainer pt= "2.5rem">
         <LeftContent>
          <span>
          <img src={img2} alt="img2" />
          </span>
          </LeftContent>

          <RightContent>
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
          </RightContent>
          </ContentContainer>
    </MainContainer>
  );
}

export default Setion2;
