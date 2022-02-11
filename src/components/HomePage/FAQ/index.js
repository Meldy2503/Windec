import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { LeftContent, RightContent, Icon } from '../FAQ/Styled';



function FAQ() {
    return (
        <MainContainer bgco= "#FFF">
            <ContentContainer pt= "8rem">
                <LeftContent>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </LeftContent>
                <RightContent>
                    <span>
                        <h5>01</h5>
                        <div>
                            <h6>How much time does it take?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                    </span>

                    <Icon>+</Icon>

                    
                </RightContent>
            </ContentContainer>
        </MainContainer>
        )
     
}

export default FAQ;