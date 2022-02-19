import styled from "styled-components";


export const Title = styled.div`
   text-align: center;
   max-width: 120rem;
   width: 90%;
   margin: 0 auto;  
   padding-top: 10rem;
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      width: 80%; 
      margin: 0 auto; 
      line-height: 1.3;
      margin-bottom: 4rem;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 3rem;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2.7rem;
         padding-bottom: 3rem;
   }}
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
     text-align: center;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      row-gap: 2rem;
      padding-bottom: 6rem;  
      }  
`;

export const Contents = styled.div`
     width: 23%;
     background-color: #fff;
  
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%;
         margin: 0 auto; 
      } 

   
     div { 
        width: 80%;
        margin: 0 auto;
        padding: 3rem 0;
        
        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
            width: 100%; 
        } 

        
        img {
             max-width: 100%;     
      }
        
        
        h6 {
            font-size: 2rem;
            margin-top: 1.2rem;
            font-weight: 500;
            
            
            @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
                font-size: 1.8rem; 
                padding: 0;
                margin-top: 0;        
      }}
   
   p {
      line-height: 1.8;
      font-size: 1.5rem; 
     }}
`;

