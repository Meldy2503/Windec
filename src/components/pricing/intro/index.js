import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Contents, Title, CardContainer, Cards } from "./priceIntroStyled";
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
                    <Cards>
                        <div key={items.id}>
                            <div>
                            <h3>{items.price}</h3>
                            <p>{items.priceTag}</p> 
                            </div>

                            <div>
                            <h5>{items.title}</h5>
                            <p>{items.text}</p>
                            </div>

                            <div>
                                <ul>
                                    <li>{items.list0}</li>
                                    <li>{items.list1}</li>
                                    <li>{items.list2}</li>
                                    <li>{items.list3}</li>
                                    <li>{items.list4}</li>
                                    <li>{items.list5}</li>
                                </ul>
                            </div> 

                            <div>
                                <Button>{items.button}</Button>
                            </div>
                        </div>
                    </Cards>
                         )
                     })} 
             </CardContainer>

             </Contents>
        </MainContainer>
  );
}

export default Intro;




