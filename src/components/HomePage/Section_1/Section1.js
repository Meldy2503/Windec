import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { LeftContent, RightContent } from "./Section1Styled"
import data from "./secData"



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

        {data.map((list) => {
          return (
            <RightContent key={list.id}>
              <div>{list.no}</div>
              <h3>{list.title}</h3>
              <p>{list.text}</p>

           </RightContent>   

          )
        }
        )}



      </ContentContainer>
      
  </MainContainer>
  );
}

export default Section1;
