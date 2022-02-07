import styled from "styled-components";

export const Span = styled.span`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 90%;
     max-width: 120rem;
     margin: 0 auto;
     padding-top: 10rem;

     h2 {
        margin-bottom: 2rem;
        font-size: 3.3rem;
       
     }
     li {
         display: flex;
         align-items: center;
         margin-top: -1.5rem;
        
     }

     li a {
         text-decoration: none;
         margin-right: 1.5rem;
         color: ${({theme}) => theme.colors.primary1}; 
     }
`;

export const ImageContainer = styled.div`
     /* display: flex;
     width: 85%;
     max-width: 120rem;
     margin: 0 auto;
     justify-content: space-between;
      */
`;