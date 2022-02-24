import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { Contents } from "./ctaStyled";

function CTA() {
  return (
        <MainContainer bgco="#fff">
            <ContentContainer>
              <Contents>
                  <h2>Let's build something great together</h2>
                  <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                  <span>
                    <Button>Contact Us</Button>
                  </span> 

              </Contents> 
            </ContentContainer>    
        </MainContainer>
  );
}

export default CTA;



