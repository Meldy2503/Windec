import styled from "styled-components";

export const Button = styled.a`
border-radius: 2em;
font-size: 1.6rem;
border: ${({border}) => border || "none"}; 
padding: ${({padding}) => padding || ".7em 3em"};
background-color: ${({bgc}) => bgc || "#FCD980"};
color: ${({color}) => color || "#1B1C2B"};


    &:hover {
      border: ${({bh}) => bh || "none"};
      background-color: ${({bgh}) => bgh || "#FDE4A6"};
      
    }


      /* @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
           border: none;
           background-color: transparent;
           

           &:hover {
           border: none;
           color: ${({theme}) => theme.colors.secondary1};

       }

    }
     */
`;
