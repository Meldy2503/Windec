import styled from "styled-components";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 45%;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%; 
  }


  div {
     display: flex;
     align-items: center;
     flex-direction: row;
     margin-top: 3.5rem;
     font-weight: 500;

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.smobile}) {
        flex-direction: column;
        align-items: flex-start;
      }

  h6 {
    font-size: 2rem; 
  }    

  h1 {
     font-size: 3.5rem;
     line-height: 1.5; 
     color: #fff;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem; 
  }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      font-size: 2.5rem; 
      margin-top: 5rem;
  }}



  p {
     width: 85%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2.5rem;
     color: ${({theme}) => theme.colors.tertiary2};
  }  
     }
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