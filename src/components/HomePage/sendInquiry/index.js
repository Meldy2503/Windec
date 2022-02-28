import React from "react";
import { LeftContent, RightContent } from "./Styled";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";

function SendInquiry() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer pt="0" data-aos="fade-up" data-aos-duration="500">
        <LeftContent>
          <div>
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </LeftContent>
        <RightContent>
          <div>
            <h5>Send inquiry</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form action="#">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Paste your Web design URL" />
              <Button href="contact-us" margin="2.5rem 0">
                Send an Inquiry
              </Button>
            </form>
            <li>
              <a href="contact-us">Get in touch with us</a>
              <CgArrowLongRight />
            </li>
          </div>
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default SendInquiry;
