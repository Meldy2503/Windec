import styled from "styled-components";
import img6 from "../../images/img6.svg";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 49%;
  position: relative;
  background-image: linear-gradient(45deg, rgba(28, 30, 83, 0.5), rgba(28, 30, 83, 0.6)), url(${img6});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
     width: 45%; 
  }

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
    display: none;
 } 
         
    div {
         position: absolute;
         top: 8rem;
         left: 5rem;
         width: 75%; 

         @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
          left: 3rem;
          width: 80%; 
    } 
         
  h1 {
     font-size: 4rem;
     line-height: 1.3; 
     font-weight: 600;
     color: #fff;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }   
  }

  p {
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2.5rem;
     color: #fff;
  }}
`;

export const RightContent = styled.div`
  width: 51%;
  background-color: ${({theme}) => theme.colors.primary2};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
          width: 55%; 
    } 

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
      } 

  div {
    width: 70%;
    margin: 0 auto;
    margin-top: 8rem;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
          width: 80%; 
    } 

    h5 {
      color: #fff;
      font-size: 2.8rem;
      font-weight: 500;
    }

    p {
     font-weight: 400;
     line-height: 1.7;
     margin: 2.3rem 0 3.5rem 0;
     color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;

    input {
      background-color: transparent;
      border: 1px solid #F4F6FC33;
      margin-bottom: 1.5rem;
      padding: 2rem;
      border-radius: .5rem;
      outline: none;
      color: #fff;

      &::placeholder {
        color: ${({theme}) => theme.colors.primary5};
        opacity: 0.6;
      }

      &:focus {
        background-color: #F4F6FC33;
        border-bottom: 2px solid #fff;
      
      }
    }
  }

  li {
         display: flex;
         align-items: center;
         color: #fff;
         justify-content: center;
         margin-bottom: 6rem;
     } 
        
        li a {
          text-decoration: none;
          margin-right: 1.5rem;
          align-items: center;
          color: #fff;
     }
   } 
`;