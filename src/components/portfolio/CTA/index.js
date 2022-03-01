import React from "react";
import {
  MainContainer,
  ContentContainer,
} from "../../reusableComponents/ContainerStyled";
import { Button } from "../../reusableComponents/ButtonStyled";
import { Contents } from "./ctaStyled";

function CTA() {
  return (
    <MainContainer bgco="#fff">
      <ContentContainer pt="0" mpt="0">
        <Contents data-aos="fade-up">
          <h2>Let's build something great together</h2>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <span data-aos="fade-up">
            <Button href="/contact-us">Contact Us</Button>
          </span>
        </Contents>
      </ContentContainer>
    </MainContainer>
  );
}

export default CTA;
