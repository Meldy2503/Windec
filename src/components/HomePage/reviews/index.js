import React from "react";
import {
  ContentContainer,
  MainContainer,
} from "../../reusableComponents/ContainerStyled";
import {
  LeftContent,
  SliderContainer,
  RightContent,
  Customers,
  LeftArrow,
  RightArrow,
} from "../reviews/Styled";
import data from "./reviewsData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const NextArrow = ({ onClick }) => {
    return (
      <RightArrow onClick={onClick}>
        <FaAngleRight className="icons" />
      </RightArrow>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <LeftArrow onClick={onClick}>
        <FaAngleLeft className="icons" />
      </LeftArrow>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <MainContainer bgco="#fff">
      <ContentContainer>
        <LeftContent data-aos="fade-right">
          <h3>What our clients say about us</h3>
          <p>We derive pleasure through our happy and satisfied customers.</p>
        </LeftContent>

        <SliderContainer>
          <Slider {...settings}>
            {data.map((reviews) => {
              return (
                <RightContent key={reviews.id} data-aos="fade-left">
                  <h5>{reviews.comment}</h5>

                  <Customers>
                    <img src={reviews.img} alt="img5" />
                    <div>
                      <h6>{reviews.name}</h6>
                      <p>{reviews.position}</p>
                    </div>
                  </Customers>
                </RightContent>
              );
            })}
          </Slider>
        </SliderContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default Reviews;
