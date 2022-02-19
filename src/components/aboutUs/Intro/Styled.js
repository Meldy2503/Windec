import styled from "styled-components";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 45%;
  margin-top: 3rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%; 
  }


  div {
     display: flex;
     flex-direction: column;
     width: 100%;
     font-weight: 500;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }


  h6 {
    font-size: 1.8rem; 
    font-weight: 500;
    margin-bottom: 1.5rem;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      margin-bottom: -3rem;
      margin-top: 5rem;
  }
  }    

  h1 {
     font-size: 3.3rem;
     line-height: 1.4; 
     font-weight: 600;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem; 
  }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      font-size: 3rem; 
      margin-top: 5rem;
  }}

  p {
     width: 100%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }
  }}
`;

export const RightContent = styled.div`
  width: 45%;
  margin-top: 3rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
   width: 100%; 
  }

  img {
    max-width: 100%;
  }

`;