import styled from "styled-components";


export const Title = styled.div`
   text-align: center;
   max-width: 120rem;
   width: 90%;
   margin: 0 auto;  
   padding: 10rem 0;
   
   h2 {
      font-size: 3.6rem;
      font-weight: 600;
      width: 40%;
      margin: 0 auto; 
      line-height: 1.3;
      padding: 1.3rem 0;  
   }
`;

export const Container = styled.div`
     max-width: 120rem;
     width: 90%;
     margin: 0 auto;
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     row-gap: 9rem;
     justify-content: space-between;
`;
export const Contents = styled.div`
     width: 32%;
     background-color: #fff;
     box-shadow: .1rem .2rem .3rem #eee;
     margin-top: -7rem;
   
    
   
   div { 
     width: 83%;
     margin: 0 auto;
     padding: 6rem 0 5rem 0;
   
     h6 {
      font-size: 2.2rem;
      margin: 1rem 0;
      font-weight: 600;   
   }
   
   p {
      line-height: 1.8;
      font-size: 1.45rem;
      
     }


   }
`;

