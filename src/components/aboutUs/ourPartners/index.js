import React from "react";
import { MainContainer, Title } from "./ourPartnersStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fbLogo from "../../images/facebookLogo.jpg";
import googleLogo from "../../images/googleLogo.jpg";
import bingLogo from "../../images/bingLogo.jpg";
import hubspotLogo from "../../images/hubspotLogo.jpg";
import metaLogo from "../../images/metaLogo.jpg";
import neonLogo from "../../images/neonLogo.jpg";
import splashLogo from "../../images/splashLogo.jpg";

function OurPartners() {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 200,
    slidesToShow: 4,
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
    <MainContainer bgco="#fff">
      <Contents>
        <Title>
          <h2>Our Partners:</h2>
        </Title>

        <Row>
          <Slider {...settings}>
            <Column>
              <img src={fbLogo} alt="fbLogo" />
              <img src={googleLogo} alt="googleLogo" />
              <img src={bingLogo} alt="bingLogo" />
              <img src={hubspotLogo} alt="hubspotLogo" />
              <img src={hubspotLogo} alt="hubspotLogo" />
              <img src={metaLogo} alt="metaLogo" />
              <img src={neonLogo} alt="neonLogo" />
            </Column>
          </Slider>
        </Row>
      </Contents>
    </MainContainer>
  );
}

export default OurPartners;
