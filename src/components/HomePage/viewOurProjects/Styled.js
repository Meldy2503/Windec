import styled from "styled-components";

export const Title = styled.span`
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

        @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
           font-size: 3rem;
         } 
   
         @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
           font-size: 2.7rem;
         } 
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

export const Container = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;  
   padding: 2.5rem 0 10rem 0;
  
   @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         flex-direction: column;
      } 
`;

export const LeftContent = styled.div`
     width: 65.5%;
     position: relative;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
        width: 100%;
        margin: 0 auto;
      } 

     span {
          position: absolute;
          left: 0;
          top: 0; 
          width: 47%;
          height: 99%;
          background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.5) 103.96%);

        div {
           padding-top: 20rem;
           margin: 0 auto;
           width: 80%;
         
          h3 {
              margin-bottom: 1rem;
              font-size: 2rem;
              color: #fff;
              line-height: 1.3;
            }

          p {
              margin-bottom: 2rem;
              line-height: 1.4;
              color: #fff;
              opacity: 0.8;
              font-size: 1.4rem;
            }

          li {
              display: flex;
              align-items: center;
              color: ${({theme}) => theme.colors.secondary2}; 
            }

          li a {
              text-decoration: none;
              margin-right: 1.3rem;
              color: ${({theme}) => theme.colors.secondary2}; 
            }
        }}

     img {
         max-width: 100%;   
     }
`;

export const RightContent = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 3rem;
    position: relative;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
        
        flex-direction: row;
        flex-wrap: nowrap;
        margin: 0 auto;
        width: 100%;
      } 

    span {
          position: absolute;
          right: 0;
          top: 0; 
          width: 100%;
          height: 48%;
          background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.5) 103.96%);

          @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {    
             width: 48%;
             height: 100%;
             position: absolute;
             left: 0;
             top: 0; 
      } 

        div {
           padding-top: 8rem;
           margin: 0 auto;
           /* width: 50%; */
         
          h3 {
              margin-bottom: 1rem;
              font-size: 2rem;
              color: #fff;
              line-height: 1.3;
            }

          li {
              display: flex;
              align-items: center;
              color: ${({theme}) => theme.colors.secondary2}; 
            }

          li a {
              text-decoration: none;
              margin-right: 1.3rem;
              color: ${({theme}) => theme.colors.secondary2}; 
            }
        }}

        img {

        }
    
    
    .img4 {
        max-width: 100%;
        height: 3rem;
      
        
    }
`; 
    

     

