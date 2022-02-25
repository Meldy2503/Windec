import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Contents, Title, CardContainer, Cards, CardContents, ContentA, ContentB, ContentC } from "./priceIntroStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import data from "./Data"


function Intro() {
  return (
        <MainContainer bgco= "#fff">
            <Contents>
              <Title>
                  <h2>Our Pricing Plans</h2>
                  <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
              </Title> 

             <CardContainer>
                     {data.map((items) => {
                         return (
                    <Cards  
                    bg={items.id % 2 === 0 && "#1C1E53"}
                    co={items.id % 2 === 0 && "#fff"}
                    >
                        <CardContents key={items.id}>
                            <ContentA>
                               <h3>${items.price}</h3>
                               <p>{items.priceTag}</p> 
                            </ContentA>

                            <ContentB>
                               <h4>{items.title}</h4>
                               <p>{items.text}</p>
                            </ContentB>

                            <ContentC>
                                <li>{items.option.one}</li>
                                <li>{items.option.two}</li>
                                <li>{items.option.three}</li>
                                <li>{items.option.four}</li>
                                <li>{items.option.five}</li>
                                <li>{items.option.six}</li>
                            </ContentC> 

                            <div>
                                <Button
                                bgc={items.id % 2 !== 0 && "#1B1C2B"}
                                color={items.id % 2 !== 0 && "#fff"}
                                bgh={items.id % 2 !== 0 && "#282938"}
                                >{items.button}</Button>
                            </div>
                        </CardContents>
                    </Cards>
                         )
                     })} 
             </CardContainer>

             </Contents>
        </MainContainer>
  );
}

export default Intro;




