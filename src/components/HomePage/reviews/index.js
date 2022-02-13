import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Contents, LeftContent, RightContent, Customers } from '../reviews/Styled';
import img5 from "../../images/img5.svg";


function Reviews() {
    return (
        <MainContainer bgco= "#FFF">
            <Contents>
                <LeftContent>
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </LeftContent>
                <RightContent>
                    <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>

                    <Customers>
                        <img src={img5} alt="img5" />
                        <div>
                           <h6>Jenny Wilson</h6> 
                           <p>Vice President</p>
                        </div>
                    </Customers>
                </RightContent>
            </Contents>
        </MainContainer>
        )
     
}

export default Reviews;
