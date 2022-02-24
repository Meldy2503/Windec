import styled from "styled-components";


export const LeftContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 35%;
  color: #fff;
  

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%; 
     margin: 0 auto; 
  }


  h1 {
     letter-spacing: .7rem;
     text-shadow: .1rem .2rem .3rem #000;
     font-size: 2.5rem;
     margin-bottom: 1.5rem;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        font-size: 2rem;
        margin-bottom: .5rem;
        margin-top: -2.5rem;
  }}


  p {
      font-size: 1.6rem;
      opacity: 0.8;  
    }


  span {
    display: flex;
    background-color: ${({theme}) => theme.colors.secondary1};
    color: ${({theme}) => theme.colors.primary1};
    justify-content: space-between;
    width: 43%;
    padding: 2rem;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
        flex-direction: column;
        padding: 1rem 2rem 0 2rem;
        width: 37%;
  }

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding-top: 1rem;  
  }

  @media screen and (max-width: 500px) {
        flex-direction: column;
        padding: 1rem 0 0 1.5rem;
        margin-top: 6rem;
        justify-content: flex-start;
  }



    div { 
        width: 35%;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
        width: 100%;
        margin-bottom: 1rem; 
     }

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        width: 100%;
     }


        h6 {
            font-size: 1.8rem;
            font-weight: 500;  
        }

        p { 
            font-size: 1.5rem;
    }}
  }
`;



export const RightContent = styled.div`
   display: flex;
  flex-direction: column; 
  width: 35%;
  color: #fff;
  margin-right: 10rem;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
     width: 100%;
     margin: 0 auto;   
  }


  h1 {
     font-size: 3rem;
     margin-bottom: 1.5rem;
     font-weight: 600;

     @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        font-size: 2.5rem;
        margin: 1.5rem 0 .1rem 0;
  }}


  p {
      font-size: 1.6rem;
      opacity: 0.8;
      margin-bottom: 2.5rem;
 
       @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
          margin-bottom: 4rem; 
      }}


  span {
    margin-bottom: 2rem;
    display: block;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
          margin-bottom: 3rem; 
     }

    @media screen and (max-width: 500px) {
         margin-bottom: 9rem;
       }


    .icons {
       padding-right: 1.5rem;
       color: #fff;
       font-size: 3rem;
       cursor: pointer;
    }}
`;



export const CopyRight = styled.p`
     font-size: 1.6rem;
      opacity: 0.8;
      color: #fff;


    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: none;
  }   
`;

