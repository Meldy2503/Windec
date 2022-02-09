import styled from "styled-components";


export const Title = styled.div`
   text-align: center;
   max-width: 120rem;
   width: 90%;
   /* display: ${({display}) => display || "flex"};
   flex-direction: ${({flexd}) => flexd || "none"};
   justify-content: space-between; */
   margin: 0 auto;  
   padding: 10rem 0;
   
   h2 {
      font-size: 3.8rem;
      font-weight: 600;
      width: 43%;
      margin: 0 auto; 
      line-height: 1.3;
      padding: 1.3rem 0;  
   }
`;

export const Container = styled.div`
     max-width: 120rem;
     width: 90%;
     margin: 0 auto;
`;
export const Contents = styled.div`
     height: 30rem;
     width: 40rem;
     background-color: #fff;
     box-shadow: .1rem .2rem .3rem #d0d0d0;
     margin-top: 4rem;
   
   div { 
     width: 80%;
     margin: 0 auto;
     padding: 5rem 0;
   
     h6 {
      font-size: 2.3rem;
      margin: 1rem 0;
      font-weight: 600;   
   }
   
   p {
      line-height: 1.8;
      
     }


   }
`;

