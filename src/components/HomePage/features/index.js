import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data"

function Features() {
  return (
        <MainContainer>
              <Title>
                  <p>Features</p>
                  <h2>Design that solves problems, one product at a time</h2>
              </Title> 

             <Container>
                     {data.map((items) => {
                         return (
                    <Contents>
                        <div key={items.id}>
                            <img src={items.icon} alt="icon" />
                            <h6>{items.title}</h6>
                            <p>{items.text}</p> 
                        </div>
                    </Contents>
                         )
                     })} 
             </Container>
        </MainContainer>
  );
}

export default Features;



