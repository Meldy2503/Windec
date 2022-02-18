import React from 'react';
import { Contents } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import data from "./Data";



function MissionVission() {
  return (
  <MainContainer bgco= "#fff">
      <ContentContainer pt= "14rem">
            { data.map((item) => {
                 return (
                        <Contents key={item.id}>
                            <div>
                               <h6>{item.header}</h6>
                               <h1>{item.title}</h1>
                               <p>{item.text}</p>
                            </div>
                            <span>
                               <img src={item.img} alt="image" /> 
                            </span>
                        </Contents>
                          )
                           })}
       </ContentContainer>
  </MainContainer>
  )
}

export default MissionVission;

