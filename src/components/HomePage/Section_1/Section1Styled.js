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
     flex-direction: row;
     flex-wrap: wrap;
     width: 60%;
     justify-content: space-between;
     row-gap: 4rem;

   span {
      width: 50%;
      height: 50%; 
      
      

      div {
        width: 5rem;
        height: 5rem; 
        background-color: ${({theme}) => theme.colors.primary6};
        margin-bottom: 1rem;
        border-radius: 1rem;
        border: none;
        position: relative;

        p {
            color: ${({theme}) => theme.colors.tertiary2};
            position: absolute;
            bottom: 1.3rem;
            left: 1.5rem; 
        }
      }

      h3 {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        font-weight: 500;
      }

      p {
        line-height: 1.8;
      }
   }

   

`;
