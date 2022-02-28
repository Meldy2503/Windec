import React from "react";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { MenuOptions, CardContainer, Cards } from "./templateStyled";
import data from "./Data";
import { CgArrowLongRight } from "react-icons/cg";

function Templates() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer flexd="column">
        <MenuOptions data-aos="fade-up" data-aos-duration="2000">
          <li>
            <a href="/portfolio">All</a>
          </li>
          <li>
            <a href="/portfolio">UI Design</a>
          </li>
          <li>
            <a href="/portfolio">Webflow Design</a>
          </li>
          <li>
            <a href="/portfolio">Figma Design</a>
          </li>
        </MenuOptions>

        <CardContainer>
          {data.map((items) => {
            return (
              <Cards data-aos="fade-up" data-aos-duration="2000">
                <div key={items.id}>
                  <img src={items.img} alt="templates" />
                  <h3>{items.title}</h3>
                  <p>{items.text}</p>
                  <li>
                    <a href="/about-us">{items.link}</a>
                    <CgArrowLongRight />
                  </li>
                </div>
              </Cards>
            );
          })}
        </CardContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default Templates;
