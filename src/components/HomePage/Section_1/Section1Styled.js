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
         align-items: center;
         color: ${({theme}) => theme.colors.primary3}; 
  
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
     
        .square1 {
            width: 5rem;
            height: 5rem; 
            background-color: ${({theme}) => theme.colors.primary3};
            margin-bottom: 2rem;
            border-radius: 1.1rem 1.1rem 1.1rem 1.5rem;
            position: relative;

        .square3 {
            width: 2.9rem;
            height: 3rem; 
            background-color: ${({theme}) => theme.colors.secondary1};
            border-radius: 0 0 0 1.1rem;
            position: absolute;
            left: 0;
          bottom: 0rem;

          .square2 {
            width: 4.1rem;
            height: 4.2rem;
            background-color: ${({theme}) => theme.colors.primary6}; 
            border-radius: 0 1.1rem 0 1.3rem;
            position: absolute;
            top: -2rem;
            right: -2rem;

         .square4 {
            width: 2.5rem;
            height: 2rem;
            position: absolute;
            top: 1rem;
            left: .6rem;
            
        p {
            color: #fff;
      }
    
    }}}}

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
