import styled from "styled-components";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 45%;
  margin-top: 3rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }
  `;


export const Texts = styled.div`
     display: flex;
     flex-direction: column;
     width: 90%;
     font-weight: 500;
     margin: 0 auto;
     

  h6 {
    font-size: 1.8rem; 
    font-weight: 500;
    margin-top: -5rem;
    margin-bottom: 2rem;
    
    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        margin-bottom: .5rem;
     }}
     

  h1 {
      font-size: 3rem;
      line-height: 1.3; 
      font-weight: 600;
      margin-top: -1rem;
      
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 2.5rem; 
  }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      font-size: 2.2rem; 
      margin-top: 1rem;
  }}

  p {
     width: 100%;
     font-weight: 400;
     line-height: 1.7;
     margin-top: 1rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }}
`;


export const RightContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 50%;
  margin-top: 2.5rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
  }
  `;


export const ImgContainer = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  padding-bottom: 10rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
   padding-bottom: 5rem;
  } 

  img {
  max-width: 100%;
  }

`;