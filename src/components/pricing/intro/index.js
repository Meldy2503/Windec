import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import {
  Contents,
  Title,
  CardContainer,
  Cards,
  CardContents,
  ContentA,
  ContentB,
  ContentC,
  DesignTag,
  Btn,
} from "./priceIntroStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import data from "./Data";

function Intro() {
  return (
    <MainContainer bgco="#fff">
      <Contents>
        <Title data-aos="fade-up">
          <h2>Our Pricing Plans</h2>
          <p>
            Windec provides unmatched website design pricing packages for every
            business - par excellent designs, comprehensive features and great
            client servicing.
          </p>
        </Title>

        <CardContainer>
          {data.map((items) => {
            return (
              <Cards
                key={items.id}
                data-aos="flip-left"
                bg={items.id % 2 === 0 ? "#1C1E53" : null}
                co={items.id % 2 === 0 ? "#fff" : null}
              >
                <CardContents data-aos="zoom-in">
                  <ContentA>
                    <h3>${items.price}</h3>
                    <DesignTag color={items.id % 2 === 0 ? "#FCD980" : null}>
                      {items.priceTag}
                    </DesignTag>
                  </ContentA>

                  <ContentB>
                    <h4>{items.title}</h4>
                    <p>{items.text}</p>
                  </ContentB>

                  <ContentC>
                    <li>{items.options[0]}</li>
                    <li>{items.options[1]}</li>
                    <li>{items.options[2]}</li>
                    <li>{items.options[3]}</li>
                    <li>{items.options[4]}</li>
                    <li style={{ display: items.options.length < 6 && "none" }}>
                      {items.options[5]}
                    </li>
                  </ContentC>

                  <Btn>
                    <Button
                      to="/contact-us"
                      bgc={items.id % 2 !== 0 ? "#1B1C2B" : null}
                      color={items.id % 2 !== 0 ? "#fff" : null}
                      bgh={items.id % 2 !== 0 ? "#282938" : null}
                      padding="1.4rem 25%"
                    >
                      {items.button}
                    </Button>
                  </Btn>
                </CardContents>
              </Cards>
            );
          })}
        </CardContainer>
      </Contents>
    </MainContainer>
  );
}

export default Intro;
