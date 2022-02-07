import styled from "styled-components";

export const LeftContent = styled.div`
     display: flex;
     flex-direction: column; 
     width: 30%;

     h2 {
        margin-bottom: 2rem;
        font-size: 3.3rem;
     }

     p {
        margin-bottom: 2rem;
        line-height: 2;
     }

     li {
         display: flex;
         align-items: center;
         color: ${({theme}) => theme.colors.primary3}; 
     }

     li a {
         text-decoration: none;
         margin-right: 1.5rem;
     }

`;

export const RightContent = styled.div`
     display: flex;
     flex-direction: column; 
     width: 60%;

   span {
      width: 47%;
      height: 45%; 

      div {
        width: 5rem;
        height: 5rem; 
        background-color: ${({theme}) => theme.colors.primary3};
      }
   }

   

`;
