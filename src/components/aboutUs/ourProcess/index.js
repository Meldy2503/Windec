import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data";
import circle from "../../images/Circle.svg";

function OurProcess() {
  return (
    <MainContainer bgco="#fff">
      <Title data-aos="fade-up">
        <h2>The process we follow</h2>
      </Title>

      <Container data-aos="fade-up">
        {data.map((items) => {
          return (
            <Contents key={items.id}>
              <div className="mapped-content">
                <span>{items.id}</span>
                <img src={circle} alt="circle" />
                <h6>{items.title}</h6>
                <p>{items.text}</p>
              </div>
            </Contents>
          );
        })}
      </Container>
    </MainContainer>
  );
}

export default OurProcess;
