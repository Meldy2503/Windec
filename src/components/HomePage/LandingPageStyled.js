import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({theme}) => theme.colors.primary2};
   color: #fff;
   width: 100%;
   height: 50vh;

`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 50vh;
   margin: 0 auto;
   
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 

`;
export const RightContent = styled.div`

`;