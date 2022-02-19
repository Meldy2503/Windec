import styled from "styled-components";


export const Contents = styled.div`
  display: flex;
  flex-direction: ${({layout}) => layout || "row"};
  justify-content: space-between; 
  width: 100%;
  margin-top: 10rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    margin-top: 0rem;
  }


  div {
     display: flex;
     flex-direction: column;
     width: 45%;
     font-weight: 500;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }


  h6 {
    font-size: 1.8rem; 
    font-weight: 500;
    margin-bottom: 1rem;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      margin-bottom: -4rem;
  }}    

  h1 {
     font-size: 3.2rem;
     line-height: 1.4; 
     font-weight: 600;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 2.6rem; 
  }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      font-size: 2.3rem; 
      margin-top: 5rem;
  }}

  p {
     width: 100%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 1rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
     margin-bottom: 5rem;
  }}
}
  

  span {
     width: 45%;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }

      img {
        max-width: 100%;
      }}
      
`;
