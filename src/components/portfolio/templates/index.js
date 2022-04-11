import React from "react";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { MenuOptions, CardContainer, Cards } from "./templateStyled";
import data from "./Data";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer flexd="column">
        <MenuOptions data-aos="fade-up">
          <li>
            <Link to="/portfolio">All</Link>
          </li>
          <li>
            <Link to="/portfolio">UI Design</Link>
          </li>
          <li>
            <Link to="/portfolio">Webflow Design</Link>
          </li>
          <li>
            <Link to="/portfolio">Figma Design</Link>
          </li>
        </MenuOptions>

        <CardContainer>
          {data.map((items) => {
            return (
              <Cards key={items.id} data-aos="fade-up">
                <div>
                  <img src={items.img} alt="templates" />
                  <h3 data-aos="fade-up">{items.title}</h3>
                  <p data-aos="fade-up">{items.text}</p>
                  <li data-aos="fade-up">
                    <Link to="/about-us">{items.link}</Link>
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
