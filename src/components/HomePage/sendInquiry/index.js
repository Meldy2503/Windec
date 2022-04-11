import React from "react";
import { LeftContent, RightContent } from "./Styled";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function SendInquiry() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer>
        <LeftContent data-aos="fade-right">
          <div>
            <h1>Building stellar websites for early startups</h1>
            <p>
              At Windec, we apply seamsless, result-oriented web designs and
              development processes customized according to your brand.
            </p>
          </div>
        </LeftContent>
        <RightContent data-aos="fade-left">
          <div>
            <h5>Send inquiry</h5>
            <p>
              For business consultations or general inquiries,our customer
              service teams are ready to serve you 24/7, 365 days.
            </p>
            <form action="#">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Add message" />
              <Button to="/contact-us" margin="2.5rem 0">
                Send an Inquiry
              </Button>
            </form>
            <li>
              <Link to="/contact-us">Get in touch with us</Link>
              <CgArrowLongRight />
            </li>
          </div>
        </RightContent>
      </ContentContainer>
    </MainContainer>
  );
}

export default SendInquiry;
