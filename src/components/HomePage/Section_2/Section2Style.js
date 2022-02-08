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

export const LeftContent = styled.div`
     width: 65.5%;
     
      span {
          
      }
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
    
    img {
        max-width: 100%;
    }
`; 
    
    /* `;
 export const Img1 = styled.img`

    
 `;  
    
     
export const Img2 = styled.img`
      max-width: 100%; */
     

     

