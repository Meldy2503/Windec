import styled from "styled-components";


export const Title = styled.div`
   max-width: 120rem;
   width: 90%;
   margin: 0 auto; 

  
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 3.3rem;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 2.8rem;
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
     justify-content: space-between;
     padding-bottom: 10rem;
`;

export const Contents = styled.div`
     width: 31.5%;
     background-color: #fff;
    
   
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 90%;
         margin: 0 auto; 
      } 
   
     div { 
        width: 100%;
        margin: 0 auto;
        padding-top: 3rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
        padding-top: 5rem; 
      } 

      img { 
          max-width: 100%;
      }
   
       h6 {
        margin: 1.5rem 0;
        font-weight: 400; 
        font-size: 1.6rem; 
   }

      h5 {
       font-size: 2rem;
       font-weight: 500; 
      }
   
      p {
        margin: 1.5rem 0 2rem 0;
        line-height: 1.7;
        font-size: 1.6rem; 
     }

     li {
         display: flex;
         align-items: center;
     } 

     li a {
         text-decoration: none;
         margin-right: 1.5rem;
         align-items: center;
     }
   }

`;

