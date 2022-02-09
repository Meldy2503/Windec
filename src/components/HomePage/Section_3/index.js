import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "../Section_3/Section3Style";
import icon1 from "../../images/Icon1.svg";

function Section3() {
  return (
        <MainContainer>
              <Title>
                  <p>Features</p>
                  <h2>Design that solves problems, one product at a time</h2>
              </Title> 

             <Container>
                  <Contents>
                     <div>
                         <img src={icon1} alt="" />
                         <h6>Uses Client First</h6>
                         <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p> 
                     </div>
                  </Contents>
             </Container>

        </MainContainer>
  );
}

export default Section3;




