import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { LeftContent, RightContent } from '../FAQ/Styled';



function FAQ() {
    return (
        <MainContainer bgco= "#FFF">
            <ContentContainer>
                <LeftContent>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </LeftContent>
                <RightContent>
                    <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>

                    
                </RightContent>
            </ContentContainer>
        </MainContainer>
        )
     
}

export default FAQ;