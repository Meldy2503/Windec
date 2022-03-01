import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { Title, Container, Contents } from "./Styled";
import data from "./Data";
import { CgArrowLongRight } from "react-icons/cg";

function OurBlog() {
  return (
    <MainContainer bgco="#fff">
      <Title>
        <h2 data-aos="fade-up">Our blog</h2>
      </Title>

      <Container data-aos="fade-up">
        {data.map((items) => {
          return (
            <Contents data-aos="fade-up">
              <div key={items.id}>
                <img src={items.img} alt="blogImg" />
                <h6 data-aos="fade-up">{items.date}</h6>
                <h5 data-aos="fade-up">{items.title}</h5>
                <p data-aos="fade-up">{items.text}</p>
                <li data-aos="fade-up">
                  <a href="/about-us">Read More</a>
                  <CgArrowLongRight />
                </li>
              </div>
            </Contents>
          );
        })}
      </Container>
    </MainContainer>
  );
}

export default OurBlog;
