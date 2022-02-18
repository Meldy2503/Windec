import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data"

function MeetOurTeam() {
  return (
        <MainContainer>
              <Title>
                  <h2>The process we follow</h2>
              </Title> 

             <Container>
                     {data.map((items) => {
                         return (
                    <Contents>
                        <div key={items.id}>
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

export default MeetOurTeam;


