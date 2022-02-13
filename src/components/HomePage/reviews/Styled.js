import styled from "styled-components";

export const Contents = styled.div`
     max-width: 120rem;
     width: 90%;
     margin: 0 auto;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     padding: 10rem 0;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      flex-direction: column;
      }  
`;

export const LeftContent = styled.div`
       width: 30%;
       display: flex;
       flex-direction: column;

       @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        width: 100%;
      }  

       h3 {
           font-size: 2.8rem;
           font-weight: 600;
           line-height: 1.3;
           margin-bottom: 1.5rem;
       }

       p {
        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        margin-bottom: 4rem;
        margin-top: -.8rem;
      }  
       }
`;

export const RightContent = styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        width: 100%;
      }  

      h5 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.4;
      }

`;

export const Customers = styled.div`
     display: flex;
     align-items: center;
     margin-top: 3rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        margin-top: 1rem;
      }  
     
     img {
         border-radius: 50%;
         margin-right: 2%;
     }

     h6 {
         font-size: 1.68rem;
         font-weight: 500;
     }

     p {
        font-size: 1.2rem;
     } 
`;