import styled from "styled-components";


export const Title = styled.div`
   text-align: center;
   max-width: 120rem;
   width: 90%;
   margin: 0 auto; 
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      width: 80%;
      margin: 0 auto; 
      line-height: 1.3;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 2.5rem;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2rem;
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

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      row-gap: 2rem;
      padding-bottom: 6rem;  
      }  
`;

export const Contents = styled.div`
     width: 23%;
  
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 90%;
         margin: 0 auto; 
      } 

   
     div { 
        width: 75%;
        margin: 0 auto;
        padding-top: 3rem;
        
        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
            width: 85%; 
            padding-top: 0;
        } 

        
        img {
            position: absolute;

            @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
                display: none;      
      }}
        
        
        h6 {
            font-size: 2.2rem;
            padding: 3.5rem 0 1rem 0;
            margin-top: 1.3rem;
            font-weight: 600;
            border-top: 2px dashed #b3b3ff;
            
            
            @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
                font-size: 1.7rem; 
                border-top: none;
                padding: 0;
                margin-top: 0;        
      }}
   
   p {
      line-height: 1.8;
      font-size: 1.45rem; 
     }}
`;

