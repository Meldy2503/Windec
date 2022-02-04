import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary2};
  position: fixed;
  height: 6.3rem;
  box-shadow: .1rem .5rem .4rem ${({theme}) => theme.colors.tetiary1};
  
`;

export const Nav = styled.nav`
  width: 80%;
  background-color: transparent; 
  margin: 0 auto; 
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

`;


export const NavTitle = styled.h3`
 letter-spacing: 1rem;
 text-shadow: .1rem .2rem .3rem #000;

 @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
  display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(30%, 50%)
    
    }
`;


export const Ul = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      display: flex;
      flex-direction: column;
      background-color: #000;
      position: absolute;
      top: 6.2rem;
      left: -13%;
      width: 126%;
    
    }



  li {
    list-style: none;
    padding: 1.4em 1.5em;
  }

  li a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.tetiary1};

    &:hover {
      border-bottom: 2px solid ${({theme}) => theme.colors.secondary1};
      padding-bottom: .2em;
    }
  }

`;

export const MenuIcon = styled.div`
  font-size: 2.5rem;
  display: none;

  &:hover {
      color: ${({theme}) => theme.colors.secondary1};
    }

    @media screen and (max-width: ${({theme}) => theme.mediaQuery.tablet}) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(30%, 50%)
    }
    
`;



