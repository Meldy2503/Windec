import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { Contents, LeftContent, RightContent } from "./Styled";
import data from "./Data";

function HowWeWork() {
  return (
    <MainContainer>
      <Contents>
        <LeftContent data-aos="fade-right" data-aos-duration="600">
          <h2>How we work</h2>
          <p>
            Lorem ipsum dolor sit et consect etur adipisicing elit. Minus
            blanditiis elit.
          </p>
          <li>
            <a href="/contact-us">Get in touch with us</a>
            <CgArrowLongRight />
          </li>
        </LeftContent>
        <RightContent data-aos="fade-left" data-aos-duration="1000">
          {data.map((list) => {
            return (
              <span key={list.id}>
                <div className="square1">
                  <div className="square3">
                    <div className="square2">
                      <div className="square4">
                        <p>{list.no}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>{list.title}</h3>
                <p>{list.text}</p>
              </span>
            );
          })}
        </RightContent>
      </Contents>
    </MainContainer>
  );
}

export default HowWeWork;
