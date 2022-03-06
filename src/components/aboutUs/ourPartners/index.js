import React from "react";
import { MainContainer, Title } from "./ourPartnersStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurPartners() {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },

    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       arrows: false,
    //       autoplay: true,
    //     },
    //   },
    // ],
  };

  return (
    <MainContainer>
      <Contents>
        <Title>
          <h2>Our Partners:</h2>
        </Title>

        <Row>
          <Slider {...settings}>
            <Column>
              <FbLogo />
              <BingLogo />
              <GoogleLogo />
              <HubspotLogo />
              <NeonLogo />
              <SplashLogo />
              <MetaLogo />
            </Column>
          </Slider>
        </Row>
      </Contents>
    </MainContainer>
  );
}

export default OurPartners;
