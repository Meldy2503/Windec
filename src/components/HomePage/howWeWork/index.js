import React from "react";
import { MainContainer } from "../../reusableComponents/ContainerStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { Contents, LeftContent, RightContent } from "./Styled";
import data from "./Data";
import { Link } from "react-router-dom";

function HowWeWork() {
  return (
    <MainContainer>
      <Contents>
        <LeftContent data-aos="fade-right">
          <h2>How we work</h2>
          <p>
            We've got you covered from analysis and designs to completely optimized website solutions. 
          </p>
          <li>
            <Link to="/contact-us">Get in touch with us</Link>
            <CgArrowLongRight />
          </li>
        </LeftContent>
        <RightContent data-aos="fade-left">
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
