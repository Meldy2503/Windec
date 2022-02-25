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
   margin-bottom: 3rem;
   
   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      margin-bottom: 2rem;
      } 
  
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      width: 50%;
      /* margin: 0 auto;  */
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

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      row-gap: 2rem;
      }  
`;


export const Cards = styled.div`
     width: 32%;
     border-radius: 1rem;
     background-color: ${({bg}) => bg || "#F4F6FC"};     
     box-shadow: .1rem .2rem .2rem #eee;
     color: ${({co}) => co || "#282938"};  
   
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%;
         margin: 0 auto; 
      }   
  `; 


  export const CardContents = styled.div`
        width: 85%;
        margin: 0 auto;
        padding: 2rem 0;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 80%; 
      } 
    `;  


export const ContentA = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;

    
    h3 {
      font-size: 2.5rem;
      font-weight: 600; 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2rem; 
      } 
    }


    p {
      font-size: 1.5rem; 
     }
`;  


export const ContentB = styled.div`
    
    h4 {
      font-size: 2.5rem;
      font-weight: 600; 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2.2rem; 
      } 
    }

    p {
      font-size: 1.5rem; 
     }
`; 


export const ContentC = styled.ul`
    width: 80%;

    li {
       font-size: 1.5rem; 
       list-style: none;

       li::before {
          content: "\25B7";
          color: red;
          display: inline-block;
          margin-left: -1rem;
          width: 2rem;
       }
    } 
`;  


