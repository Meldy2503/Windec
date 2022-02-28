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
        <Title data-aos="fade-up" data-aos-duration="2000">
          <h2>Our Pricing Plans</h2>
          <p>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </Title>

        <CardContainer>
          {data.map((items) => {
            return (
              <Cards
                bg={items.id % 2 === 0 && "#1C1E53"}
                co={items.id % 2 === 0 && "#fff"}
              >
                <CardContents
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  key={items.id}
                >
                  <ContentA>
                    <h3>${items.price}</h3>
                    <DesignTag color={items.id % 2 === 0 && "#FCD980"}>
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
                      href="/contact-us"
                      bgc={items.id % 2 !== 0 && "#1B1C2B"}
                      color={items.id % 2 !== 0 && "#fff"}
                      bgh={items.id % 2 !== 0 && "#282938"}
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
