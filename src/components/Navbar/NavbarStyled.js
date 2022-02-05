import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary2};
  position: fixed;
  height: 7.1rem;
  
  
`;

export const Nav = styled.nav`
  max-width: 120rem;
  width: 90%;
  background-color: transparent; 
  margin: 0 auto; 
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: .5em;


  .openMenu {
    display: none;
  

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      display: flex;
      flex-direction: column;
      background-color: ${({theme}) => theme.colors.primary2};
      position: absolute;
      top: 7rem;
      right: -10%;
      width: 60%;
      height: 100vh;
     
      
    }
  }

    .closeMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      
      

      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 6.2rem;
      left: -100%;
    
      
    
    }
  }

  li {
    list-style: none;
    padding: 1.4em 1.5em;
  }

  li a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.tetiary1};
    

    &:hover {
      border-bottom: 2px solid ${({theme}) => theme.colors.tetiary1};
      padding-bottom: .2em;
    }
      
      @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {

        text-align: left;
        border-bottom: 1px solid ${({theme}) => theme.colors.tetiary1};
        display: block;
        margin-bottom: .5em;

        &:hover {
           color: ${({theme}) => theme.colors.secondary1};
          

       }
      
    }
  }

`;


export const NavTitle = styled.h3`
 letter-spacing: .7rem;
 text-shadow: .1rem .2rem .3rem #000;
 font-size: 2.5rem;

 @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
  display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(22%, 50%);
    
    }
`;
 
 

export const MenuIcon = styled.div`

  display: none;

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      display: block;
      font-size: 2.5rem;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-120%, 60%);

      &:hover {
      color: ${({theme}) => theme.colors.secondary1};
    }
    }
  
    
`;



