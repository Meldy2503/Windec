import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { Span, ImageContainer } from "./Section2Style";
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
        <ContentContainer>
          <img src={img2} alt="img2" />
          <span>
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
          </span>
        </ContentContainer>
    </MainContainer>
  );
}

export default Setion2;
