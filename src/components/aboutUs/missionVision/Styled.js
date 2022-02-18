import styled from "styled-components";


export const Contents = styled.div`
  display: flex;
  flex-direction: column; 
  width: 48%;
  margin-top: 3rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }


  div {
     display: flex;
     flex-direction: column;
     width: 90%;
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
  }}    

  h1 {
     font-size: 4rem;
     line-height: 1.4; 
     font-weight: 600;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3.5rem; 
  }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      font-size: 3rem; 
      margin-top: 5rem;
  }}

  p {
     width: 85%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 2rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }}
  }

  span {
     width: 50%;
     margin-top: 3rem;

      img {
        max-width: 100%;
      }}
`;

// export const RightContent = styled.div`
//   width: 50%;
//   margin-top: 3rem;

//   img {
//   max-width: 100%;
//   }

//   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
//       display: none;  
//   }
// `;