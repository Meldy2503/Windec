import styled from "styled-components";


export const Contents = styled.div`
   max-width: 120rem;
   width: 90%;
   margin: 0 auto; 
   padding: 10rem 0;

   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding: 5rem 0;
      } 
   `;

export const Title = styled.div`
   text-align: center;
   padding-bottom: 3rem;
   
   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding-bottom: 2rem;
      } 
  
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      width: 50%;
      margin: 0 auto; 
      line-height: 1.3;
      padding: 1.3rem 0;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 60%;
         font-size: 3rem;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2.7rem;
         width: 80%;
      } 
   }
`;

export const CardContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     row-gap: 2.5rem;
     justify-content: space-between;
     padding-bottom: 6rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      row-gap: 2rem;
      }  
`;

export const Cards = styled.div`
     width: 32%;
     background-color: ${({theme}) => theme.colors.primary5};
     box-shadow: .1rem .2rem .2rem #eee;
   
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%;
         margin: 0 auto; 
      } 
   
     div { 
        width: 83%;
        margin: 0 auto;
        padding: 6rem 0 5rem 0;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 75%; 
      } 
   
     h6 {
      font-size: 2.2rem;
      margin: 1rem 0;
      font-weight: 600;  
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 1.7rem; 
      } 
   }
   
   p {
      line-height: 1.8;
      font-size: 1.45rem; 
     }
   }
`;

export const IconsContainer = styled.div`
     width: 10%;
     display: flex;
     justify-content: space-between;
   
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 31%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 48.5%;
         margin: 0 auto; 
      } 
`;
