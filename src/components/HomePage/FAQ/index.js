import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { LeftContent, RightContent, Texts } from '../FAQ/Styled';
import data from "./Data"



function FAQ() {
    return (
        <MainContainer bgco= "#FFF">
            <ContentContainer pt= "8rem">
                <LeftContent>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </LeftContent>
                <RightContent>
                    {data.map((item) => {
                        return (
                      <Texts key={item.id}>    
                         <span>
                            <h5>{item.no}</h5>
                            <div>
                                <h6>{item.question}</h6>
                                <p>{item.answer}</p>
                            </div>
                         </span>
                         <h4>+</h4>
                      </Texts>
                       )})}
                </RightContent>
            </ContentContainer>
        </MainContainer>
        
        )
     }

export default FAQ;