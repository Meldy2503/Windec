import React from 'react';
import { MainContainer, ContentContainer } from "../../reusableComponents/ContainerStyled";
import { LeftContent, RightContent, Texts } from '../pricingFAQ/pricingFAQStyle';
import data from "./Data"



function PricingFAQ() {
    
    const [ onClick, setOnClick ] = React.useState({})
    const handleClick = (index) => () => {
        setOnClick(state => ({
            ...state,
            [index]: !state[index]
        }))
       
    };


    return (
        <MainContainer bgco= "#FFF">
            <ContentContainer pt= "0">
                <LeftContent>
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </LeftContent>
                <RightContent>
                    {data.map((item, index) => {
                        return (
                      <Texts key={item.id}>    
                         <span>
                            <h5>{item.no}</h5>
                            <div>
                                <h6>{item.question}</h6>
                                {onClick[index] && <p>{item.answer}</p>}
                            </div>
                         </span>
                         <h4 onClick={handleClick(index)}>{onClick[index] ? "x" : "+"}</h4>
                      </Texts>
                       )})}
                </RightContent>
            </ContentContainer>
        </MainContainer>
        
        )
     }

export default PricingFAQ;