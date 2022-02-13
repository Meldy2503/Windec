import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data"

function OurBlog() {
  return (
        <MainContainer>
              <Title>
                  <h2>Our blog</h2>
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

export default OurBlog;




