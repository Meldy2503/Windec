import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({theme}) => theme.colors.primary2};
   color: #fff;
   width: 100%;
   

`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 

  h2 {
     width: 58.2rem;
     font-weight: 500;
     font-size: 5.4rem;
     line-height: 1.3;
     margin-top: 21.5rem;
  }
  p {
     width: 52rem;
     font-weight: 400;
     line-height: 1.6;
     margin-top: 3rem;
     opacity: 0.7;
  }

`;
export const RightContent = styled.div`

`;