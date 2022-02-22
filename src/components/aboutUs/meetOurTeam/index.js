import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
                           <figure>
                               <img src={items.img} alt="img" />  
                               <figcaption>
                                    <a href="#">
                                       <FaFacebook className='icons' />
                                    </a>
                                    <a href="#">
                                        <FaTwitter className='icons' />
                                    </a>
                                    <a href="#">
                                        <FaInstagram className='icons' />
                                    </a>
                                </figcaption>                  
                           </figure>             
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


