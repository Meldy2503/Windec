import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({bgco}) => bgco || "#F4F6FC"};
   color: ${({co}) => co || "#282938"}; 
   width: 100%;
`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   flex-direction: ${({flexd}) => flexd || "none"};
   justify-content: space-between;
   margin: 0 auto;  
   padding: ${({pd}) => pd || "12rem 0"};
  

   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding: ${({pd}) => pd || "12rem 0"};
    }
 `;