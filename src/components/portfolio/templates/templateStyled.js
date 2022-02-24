import styled from "styled-components";


export const MenuOptions = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        text-align: center;
      } 
 
    
    li {
        list-style: none;
        margin-right: 2.5rem;

        @media screen and (max-width: 500px) {
            margin-right: 0;
            margin-top: 1rem;
      } 
    }
    
    
    li a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.primary1};
    
    &:hover {
    color: ${({theme}) => theme.colors.primary3};
   }}
`; 
  

export const CardContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-between;
     padding: 2rem 0 3rem 0;
`;

export const Cards = styled.div`
     width: 47.5%;
     
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%;
         margin: 0 auto; 
      } 

   
     div { 
        width: 100%;
        margin: 0 auto;
        padding-top: 3rem;

        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
          padding-top: 1.5rem; 
      } 


      img { 
          max-width: 100%;    
      }

   
       h3 {
        margin: 1.5rem 0 1rem 0;
        font-weight: 500; 
        font-size: 2.5rem; 
       
       @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
          font-size: 2rem; 
      }}

   
      p {
        margin: 1rem 0 1.5rem 0;
        line-height: 1.7;
        font-size: 1.6rem; 

        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         margin: 1rem 0 1.5rem 0;
         line-height: 1.5;
      }}


     li {
         display: flex;
         align-items: center;
         margin-bottom: 3rem;
     } 


     li a {
         text-decoration: none;
         margin-right: 1.5rem;
         color: ${({theme}) => theme.colors.primary1};
     }}
`;

