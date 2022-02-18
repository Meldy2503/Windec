import styled from "styled-components";


export const Title = styled.div`
   text-align: center;
   max-width: 120rem;
   width: 90%;
   margin: 0 auto; 
   padding: 10rem 0 3rem 0;
   
   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding: 5rem 0 2rem 0;
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
         font-size: 2rem;
         width: 80%;
      } 
   }
`;

export const Container = styled.div`
     max-width: 120rem;
     width: 90%;
     margin: 0 auto;
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     row-gap: 2.5rem;
     justify-content: space-between;
     padding-bottom: 10rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      row-gap: 2rem;
      }  
`;

export const Contents = styled.div`
     width: 32%;
     background-color: #fff;
     box-shadow: .1rem .2rem .3rem #eee;
   
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

