import styled from "styled-components";

// export const NavButton = styled.a`
// border-radius: 2em;
// font-size: 1.6rem;
// border: 2px solid #F4F6FC33; 
// padding: .7em 3em;
// margin-left: 1.5em;
// background-color: ${({theme}) => theme.colors.primary2};;
// color: #fff;

// &:hover {
//            border: 2px solid #FFF;
//        }

// @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
//            border: none;
//            background-color: transparent;
//            padding: .8em 3em;
           
           

//            &:hover {
//            border: none;
//            color: ${({theme}) => theme.colors.secondary1};

//        }}
// `;


export const Button = styled.a`
border-radius: 2em;
font-size: 1.6rem;
border: ${({border}) => border || "none"}; 
padding: ${({padding}) => padding || ".9em 3em"};
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
