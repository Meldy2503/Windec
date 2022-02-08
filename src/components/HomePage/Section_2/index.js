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
          <img src={img2} alt="img2" />
          <span>
              <div> 
                  <h3>
                     Workhub Office Webflow Webflow Design
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conselit. Minus blanditiis elit.
                  </p>
                  <li>
                     <a href="#">View project</a>
                     <CgArrowLongRight />
                  </li>
                </div>
          </span>
          </LeftContent>

          <RightContent>
          <img src={img3} alt="img3" />
          <span> <div>
                  <h3>
                     Unisaas Website Design
                  </h3>
                  <li>
                     <a href="#">View portifolio</a>
                     <CgArrowLongRight />
                  </li>
              </div>
              </span>
          <img src={img4} alt="img4" />
          </RightContent>
          </ContentContainer>
    </MainContainer>
  );
}

export default Setion2;
