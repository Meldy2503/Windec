import styled from "styled-components";

export const LeftContent = styled.div`
       width: 30%;
       display: flex;
       flex-direction: column;

       h3 {
           font-size: 2.8rem;
           font-weight: 600;
           line-height: 1.3;
           margin-bottom: 1.5rem;
       }
`;

export const RightContent = styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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