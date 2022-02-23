import React from 'react';
import { Contents } from "./Styled";
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import data from "./Data";



function MissionVission() {
  return (
  <MainContainer bgco= "#EEF4FA">
      <ContentContainer 
      flexd= "column"
      pt= "0"
      mpb= "0"
      >
            { data.map((item) => {
                 return (
                        <Contents 
                        key={item.id} 
                        layout={item.id % 2 !== 0 && "row-reverse"}>
                            <span>
                               <img src={item.img} alt="img" /> 
                            </span>
                            <div>
                               <h6>{item.header}</h6>
                               <h1>{item.title}</h1>
                               <p>{item.text}</p>
                            </div>
                        </Contents>
                          )
                           })}
       </ContentContainer>
  </MainContainer>
  )
}

export default MissionVission;

