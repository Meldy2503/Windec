import styled from "styled-components";

export const LeftContent = styled.div`
       width: 30%;
       display: flex;
       flex-direction: column;
       justify-content: space-between;

       h3 {
           font-size: 3rem;
           font-weight: 600;
           line-height: 1.3;
           margin-bottom: 1.7rem;
       }

`;

export const RightContent = styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
`;

export const Customers = styled.div`
     display: flex;
     
     img {
         border-radius: 50%;
     }
`;