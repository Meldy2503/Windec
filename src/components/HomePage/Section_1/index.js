import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { LeftContent, RightContent } from "./Section1Styled"
import data from "./secData";



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
                      <a href="#">Get in touch with us</a>
                      <CgArrowLongRight />
              </li>
      </LeftContent> 
      <RightContent>
        {data.map((list) => {
          return (
            <span key={list.id}>
              <div><p>{list.no}</p></div>
              <h3>{list.title}</h3>
              <p>{list.text}</p>
           </span> )
         })}
      </RightContent>  
  </ContentContainer>
</MainContainer>
  );
}

export default Section1;
