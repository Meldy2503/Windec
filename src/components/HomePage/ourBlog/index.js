import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data";
import { CgArrowLongRight } from "react-icons/cg";

function OurBlog() {
  return (
        <MainContainer bgco="#fff">
              <Title>
                  <h2>Our blog</h2>
              </Title> 

             <Container>
                     {data.map((items) => {
                         return (
                    <Contents>
                        <div key={items.id}>
                            <img src={items.img} alt="image" />
                            <h6>{items.date}</h6>
                            <h5>{items.title}</h5>
                            <p>{items.text}</p>
                            <li>
                                 <a href="#">Read More</a>
                                 <CgArrowLongRight />
                            </li> 
                        </div>
                    </Contents>
                         )
                     })} 
             </Container>
        </MainContainer>
  );
}

export default OurBlog;



