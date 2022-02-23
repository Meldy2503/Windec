import styled from "styled-components";


export const Contents = styled.div`
   text-align: center;
   margin: 0 auto; 
   width: 70%;
   
   /* @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding: 5rem 0 2rem 0;
      } 
   */
   p {
      
   }   
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600; 
      line-height: 1.3;
      padding: 1.3rem 0;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 3rem;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2.7rem;
      } 
   }
`;

