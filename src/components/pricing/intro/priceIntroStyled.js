import styled from "styled-components";


export const Contents = styled.div`
   max-width: 120rem;
   width: 90%;
   margin: 0 auto; 
   padding: 10rem 0;
   `;


export const Title = styled.div`
   text-align: center;
   width: 50%;
   margin: 0 auto;

   @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 70%;
      } 

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 80%;
      } 
   
   
   h2 {
      font-size: 3.3rem;
      font-weight: 600;
      padding: 1.3rem 0;
      margin: 0 auto;
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         font-size: 3rem;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 2.7rem;
      } 
   }
   
   p {
      margin-bottom: 5rem;
   }
`;


export const CardContainer = styled.div`
flex-wrap: wrap;
flex-direction: row;
row-gap: 2.5rem;
display: flex;
justify-content: space-between;

@media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
   row-gap: 2rem;
}  
`;


export const Cards = styled.div`
     width: 32%;
     border-radius: 1rem;
     background-color: ${({bg}) => bg || "#F4F6FC"};     
     box-shadow: .1rem .2rem .3rem #777;
     color: ${({co}) => co || "#282938"};  
   
     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
         width: 48.5%;
      } 
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%;
         margin: 0 auto; 
      }   
  `; 


  export const CardContents = styled.div`
        width: 80%;
        margin: 0 auto;
        padding: 5rem 0 7rem 0;
        display: flex;
        height: 60rem;  
        justify-content: space-between;
        flex-direction: column;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 100%; 
         height: 58rem;
         padding: 5rem 7rem 7rem 7rem;
      } 

      @media screen and (max-width: 500px) { 
         padding: 5rem 2rem 7rem 2rem;
      } 
    `;  


export const ContentA = styled.div`
    display: flex;
    align-items: center;
    
    h3 {
       font-size: 3.3rem;
       font-weight: 600; 
       margin-right: 1rem;
       
       @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
          font-size: 3rem; 
         } 
      }
   `;

 
      export const DesignTag = styled.p`
       color: ${({color}) => color || "#2405F2"}; 
       font-size: 1.5rem; 
    `;  


   export const ContentB = styled.div`
      h4 {
        font-size: 2rem;
        font-weight: 600; 
        margin-bottom: 1rem;

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         font-size: 1.8rem; 
      }}

      p {
        font-size: 1.5rem; 
        line-height: 1.7;

        @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
         width: 90%; 
      }}  
`; 


export const ContentC = styled.ul`
    margin-bottom: 3rem;

    li {
       font-size: 1.5rem; 
       list-style: none;
    }

        li::before {
          content: "\\25BA";
          color: #97DAAD;
          display: inline-block;
          margin-right: 1rem;
          width: 2rem;
          margin-bottom: 1rem;
       } 
`; 


export const Btn = styled.div`
    text-align: center;
    
`;

