import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data"

function MeetOurTeam() {
  return (
        <MainContainer>
              <Title>
                  <h2>Meet our team</h2>
              </Title> 

             <Container>
                     {data.map((items) => {
                         return (
                    <Contents>
                        <div key={items.id}>
                            <img src={items.img} alt="img" />
                            <h6>{items.name}</h6>
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


