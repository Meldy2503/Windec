import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({bgco}) => bgco || "#F4F6FC"};
   color: ${({co}) => co || "#d0d0d0"}; 
   width: 100%;
`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;  
   padding-top: ${({pt}) => pt || "19rem"};
   padding-bottom:  ${({pb}) => pb || "12rem"};

   @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      padding-top: ${({pt}) => pt || "12rem"};
    }
 `;