import styled from "styled-components";
import img6 from "../../images/img6.svg";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 50%;
  position: relative;
  background-image: linear-gradient(45deg, rgba(28, 30, 83, 0.5), rgba(28, 30, 83, 0.6)), url(${img6});
  height: 70rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
         
    div {
         position: absolute;
         top: 10rem;
         left: 7rem;
         width: 70%; 
         
  h1 {
     font-size: 4rem;
     line-height: 1.5; 
     color: #fff;
  }

  p {
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2.5rem;
     color: #fff;
  }}
`;

export const RightContent = styled.div`
  width: 50%;

  
`;