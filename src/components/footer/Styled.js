import styled from "styled-components";



export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  width: 35%;
  color: #fff;
  

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%; 
     
  }

  h1 {
     letter-spacing: .7rem;
     text-shadow: .1rem .2rem .3rem #000;
     font-size: 2.5rem;
     margin-bottom: 1.5rem;
     
  }

     /* @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem;   
  }} */

  p {
      font-size: 1.6rem;
      opacity: 0.8;
      
  }

  span {
    display: flex;
    background-color: ${({theme}) => theme.colors.secondary1};
    color: ${({theme}) => theme.colors.primary1};
    justify-content: space-around;
    width: 120%;
    padding: 2rem;
    /* margin-top: 1rem; */

    div { 
        width: 45%;

        h6 {
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
  }
`;

export const RightContent = styled.div`
   display: flex;
  flex-direction: column; 
  width: 35%;
  color: #fff;
  margin-right: 10rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 90%; 
     
  }

  h1 {
     font-size: 3rem;
     margin-bottom: 1.5rem;
  }

     /* @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      font-size: 3rem;   
  }} */

  p {
      font-size: 1.6rem;
      opacity: 0.8;
      margin-bottom: 2.5rem;
  }

  span {
    margin-bottom: 5rem;

    .icons {
       padding-right: 1.5rem;
       color: #fff;
       font-size: 3rem;
       cursor: pointer;

    }

  }
`;

