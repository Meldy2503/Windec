import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Contents, Title, CardContainer, Cards, IconsContainer } from "./Styled";
import data from "./Data"
import Icon7 from "../../images/icon7.svg";
import Icon8 from "../../images/icon8.svg";
import Icon9 from "../../images/icon9.svg";
import Icon10 from "../../images/icon10.svg";
import Icon11 from "../../images/icon11.svg";
import IconNumber from "../../images/iconNumber.svg";

function Intro() {
  return (
        <MainContainer bgco= "#fff">
            <Contents>
              <Title>
                  <h2>The benefits of working with us</h2>
              </Title> 

             <CardContainer>
                     {data.map((items) => {
                         return (
                    <Cards>
                        <div key={items.id}>
                            <img src={items.icon} alt="icon" />
                            <h6>{items.title}</h6>
                            <p>{items.text}</p> 
                        </div>
                    </Cards>
                         )
                     })} 
             </CardContainer>

             <IconsContainer>
                 <img src={IconNumber} alt="iconNo" />
                 <img src={Icon7} alt="icon" />
                 <img src={Icon8} alt="icon" />
                 <img src={Icon9} alt="icon" />
                 <img src={Icon10} alt="icon" />
                 <img src={Icon11} alt="icon" />
             </IconsContainer>
             </Contents>
        </MainContainer>
  );
}

export default Intro;




