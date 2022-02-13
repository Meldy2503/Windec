import React from 'react';
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Contents, LeftContent, RightContent, Texts } from '../FAQ/Styled';
import data from "./Data"



function FAQ() {
    
    const [ onItemClick, setOnItemClick ] = React.useState(false)
    const handleClick = () => {
        setOnItemClick(!onItemClick)
    };

    return (
        <MainContainer bgco= "#FFF">
            <Contents>
                <LeftContent>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </LeftContent>
                <RightContent>
                    {data.map((item, id) => {
                        return (
                      <Texts key={item.id}>    
                         <span>
                            <h5>{item.no}</h5>
                            <div>
                                <h6>{item.question}</h6>
                                { onItemClick && <p>{item.answer}</p>}
                            </div>
                         </span>
                         <h4 onClick={handleClick}>{onItemClick ? "x" : "+"}</h4>
                      </Texts>
                       )})}
                </RightContent>
            </Contents>
        </MainContainer>
        
        )
     }

export default FAQ;