import React from "react";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { LeftContent, RightContent, Texts } from "../FAQ/Styled";
import data from "./Data";

function FAQ() {
  const [onClick, setOnClick] = React.useState({});
  const handleClick = (index) => () => {
    setOnClick((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <MainContainer bgco="#f4f5f5">
      <ContentContainer>
        <LeftContent data-aos="fade-right">
          <h3>Frequently asked questions</h3>
          <a href="/contact-us">Contact us for more info</a>
        </LeftContent>
        <RightContent>
          {data.map((item, index) => {
            return (
              <Texts key={item.id}>
                <span>
                  <h5>{item.no}</h5>
                  <div data-aos="fade-up">
                    <h6>{item.question}</h6>
                    {onClick[index] && <p>{item.answer}</p>}
                  </div>
                </span>
                <h4 onClick={handleClick(index)}>
                  {onClick[index] ? "x" : "+"}
                </h4>
              </Texts>
            );
          })}
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default FAQ;
