import styled from "styled-components";

export const Span = styled.span`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;

     h2 {
        margin-bottom: 2rem;
        font-size: 3.3rem;
     }
     li {
         display: flex;
         align-items: center;
         margin-top: -1.2rem;
        
     }

     li a {
         text-decoration: none;
         margin-right: 1.5rem;
         color: ${({theme}) => theme.colors.primary1}; 
     }
`;

export const ImageContainer = styled.div`
     
`;