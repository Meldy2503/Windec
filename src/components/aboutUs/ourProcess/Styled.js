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
         width: 100%;
         margin: 0 auto; 
      } 

   
     div { 
        width: 80%;
        margin: 0 auto;
        padding-top: 3rem;
        
        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
            width: 100%; 
            padding-top: 0;
            margin-left: 7rem;  
        } 

        
        img {
            position: absolute;


            @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
            display: none;     
     }}
        
        span {
           display: none;
           
           @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
              display: inline-block;
              text-align: center;
              height: 2.5rem;
              width: 2.5rem;
              border-radius: 50%;
              color: #fff;
              background-color: ${({theme}) => theme.colors.primary3};
              margin-bottom: .6rem;
         } 
         
         @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
            position: absolute;
            left: 4rem;
            margin-top: .7rem;  
         }}
            
   
        h6 {
            font-size: 2.5rem;
            padding: 3.5rem 0 1rem 0;
            margin-top: 1.3rem;
            font-weight: 600;
            border-top: 2px dashed #b3b3ff;
            
            
            @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
                font-size: 2rem; 
                border-top: none;
                padding-top: 0;
                margin-top: 0;        
      }}
   
   p {
      line-height: 1.8;
      font-size: 1.45rem; 
     }}
`;

