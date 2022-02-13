import styled from "styled-components";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 45%;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%; 
     
  }

  h1 {
     font-size: 4rem;
     line-height: 1.5; 
     color: #fff;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
     
  }
  }

  p {
     width: 85%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2.5rem;
     color: ${({theme}) => theme.colors.tertiary2};
  }

  span {
     display: flex;
     align-items: center;
     flex-direction: row;
     margin-top: 3.5rem;
     font-weight: 500;

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.smobile}) {
        flex-direction: column;
        align-items: flex-start;
      }

     li {
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 2.5rem;
       
        @media screen and (max-width: ${({theme}) => theme.mediaQuery.smobile}) {
        margin-top: 2.3rem;
        align-items: center;
       
     }}

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