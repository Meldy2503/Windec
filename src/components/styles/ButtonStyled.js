import styled from "styled-components";


export const Button = styled.a`
border-radius: 2rem;
font-size: 1.6rem;
border: ${({border}) => border || "none"}; 
padding: ${({padding}) => padding || "1rem 3.3rem"};
background-color: ${({bgc}) => bgc || "#FCD980"};
color: ${({color}) => color || "#1B1C2B"};
margin: ${({margin}) => margin || "none"};


    &:hover {
      border: ${({bh}) => bh || "none"};
      background-color: ${({bgh}) => bgh || "#FDE4A6"};
      
    }

     /* @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
          
          padding: .8em 2.3em;
          margin-bottom: 1em;
          justify-content: center;
          border: none;
          margin-top: .5em;

          &:hover {
          border: none;
          color: 
      
     } */

           
           
`;
