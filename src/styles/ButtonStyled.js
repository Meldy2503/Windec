import styled from "styled-components";

export const Button = styled.button`
border-radius: 2em;
cursor: pointer;
padding: .6em 2em;
background-color: ${({theme}) => theme.colors.primary2};
color: ${({theme}) => theme.colors.tetiary1};
border: 2px solid ${({theme}) => theme.colors.tetiary1}; 
font-size: 1.6rem;
margin-right: 5em;


    &:hover {
      border: 2px solid ${({theme}) => theme.colors.secondary1};
    }


      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
           border: none;
           background-color: transparent;
           

           &:hover {
           border: none;
           color: ${({theme}) => theme.colors.secondary1};

       }

    }
    
`;
