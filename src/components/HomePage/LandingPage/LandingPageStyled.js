import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({theme}) => theme.colors.primary2};
   color: #fff;  
   width: 100%;
`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;  
   padding-top: 19rem;
   padding-bottom: 12rem;

   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding-top: 15rem;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 45%;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%;  
  }

  h1 {
     line-height: 1.5; 
  }

  p {
     width: 85%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2.5rem;
     opacity: 0.7;
  }

  span {
     display: flex;
     align-items: center;
     flex-direction: row;
     margin-top: 3.5rem;
     font-weight: 500;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     flex-wrap: wrap;
      }

     li {
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 2.5rem;

        @media screen and (max-width: 396px) {
        margin-top: 2.3rem;
      }
     }

     li a {
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        padding-right: .6rem;  
         
     }}
`;

export const RightContent = styled.div`
  width: 50%;

  img {
  max-width: 100%;
  }

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: none;  
  }
`;