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
     flex-direction: column;
     margin-top: 3.5rem;
     width: 90%;
     font-weight: 500;

  h6 {
    font-size: 1.8rem; 
    font-weight: 500;
    margin-bottom: 1.5rem;
  }    

  h1 {
     font-size: 4.5rem;
     line-height: 1.4; 
     font-weight: 600;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3.5rem; 
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