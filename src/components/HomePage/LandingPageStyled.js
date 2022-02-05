import styled from "styled-components";

export const MainContainer = styled.div`
   background-color: ${({theme}) => theme.colors.primary2};
   color: #fff;
   
   

`;

export const ContentContainer = styled.div`
   max-width: 120rem;
   width: 90%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
   
   
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  margin-top: 21.5rem;
  margin-bottom: 12rem;

  h2 {
     width: 58.2rem;
     font-weight: 500;
     font-size: 5.4rem;
     line-height: 1.3;
     
  }
  p {
     width: 52rem;
     font-weight: 400;
     line-height: 1.6;
     margin-top: 2.5rem;
     opacity: 0.7;
  }

  span {
     display: flex;
     align-items: center;
     flex-direction: row;
     margin-top: 3.5rem;
     font-weight: 500;
     


     li {
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 2.5em;
     }

     li a {
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        padding-right: .6em;
        
     }


  }

`;
export const RightContent = styled.div`
margin-top: 21.5rem;

  margin-bottom: 12rem;
  
`;