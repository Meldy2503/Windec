import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary2};
  position: fixed;
  height: 7.1rem;
  z-index: 1500;
`;

export const Links = styled.nav`
  max-width: 120rem;
  width: 90%;
  background-color: transparent; 
  margin: 0 auto; 
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: .5rem;
  z-index: 2000;

  .openMenu {
    display: none;
  
    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: flex;
      flex-direction: column;
      background-color: #000033;
      opacity: 0.9;
      position: absolute;
      top: 6.5rem;
      right: -10%;
      width: 60%;
      height: 100vh;
      z-index: 1000;
    }
  }

    .closeMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 6.2rem;
      left: -100%;
    }
  }

  li {
    list-style: none;
    margin: 1.4rem 1.3rem;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      margin: 1.4rem 1rem;
    }
  }

  li a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary5};

  
    &:hover {
      border-bottom: 2px solid ${({theme}) => theme.colors.primary5};
      padding-bottom: .2rem;
    }

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        text-align: left;
        border-bottom: 1px solid ${({theme}) => theme.colors.tetiary1};
        display: block;
        margin-bottom: .5rem;

        /* li a:last-child {
          padding-bottom: 4rem;
        } */

        /* .button {
          border: none;
          background-color: red;
          
        } */

        &:hover {
           color: ${({theme}) => theme.colors.secondary1};
       }
     }
  }
`;
export const ContactUs = styled.div`
  margin-left: 1rem;
`;

export const NavTitle = styled.h3`
     letter-spacing: .7rem;
     text-shadow: .1rem .2rem .3rem #000;
     font-size: 2.5rem;

 @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(1%, 50%);
    }
`;

export const MenuIcon = styled.div`
   display: none;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.mobile}) {
      display: block;
      font-size: 2.5rem;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-1%, 45%);

      &:hover {
      color: ${({theme}) => theme.colors.secondary1};
       }
    } 
`;



