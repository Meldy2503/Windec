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

export const LeftContent = styled.div`
     width: 65.5%;
     position: relative;

     span {
          position: absolute;
          left: 0;
          top: 0; 
          width: 47%;
          height: 99%;
          background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);

        div {
           padding-top: 29rem;
           margin: 0 auto;
           width: 80%;
         
          h3 {
              margin-bottom: 1.5rem;
              font-size: 2.3rem;
              color: #fff;
            }

          p {
              margin-bottom: 4rem;
              line-height: 1.5;
              color: #fff;
              opacity: 0.8;
            }

          li {
              display: flex;
              align-items: center;
              color: ${({theme}) => theme.colors.secondary2}; 
            }

          li a {
              text-decoration: none;
              margin-right: 1.5rem;
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

    span {
          position: absolute;
          right: 0;
          top: 0; 
          width: 100%;
          height: 46.5%;
          background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);

        div {
           padding-top: 11rem;
           margin: 0 auto;
           width: 70%;
         
          h3 {
              margin-bottom: 1.5rem;
              font-size: 2.3rem;
              color: #fff;
            }

          li {
              display: flex;
              align-items: center;
              color: ${({theme}) => theme.colors.secondary2}; 
            }

          li a {
              text-decoration: none;
              margin-right: 1.5rem;
              color: ${({theme}) => theme.colors.secondary2}; 
            }
        }}
    
    img {
        max-width: 100%;
    }
`; 
    

     

