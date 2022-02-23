import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { Contents } from "./heroStyled";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Features() {
  return (
        <MainContainer>
            <ContentContainer>
              <Contents>
                  <p>What we created</p>
                  <h2>Our Work Portfolio</h2>
                  <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
              </Contents> 
            </ContentContainer>    
        </MainContainer>
  );
}

export default Features;




