import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary2};
  margin: 0 auto;
  padding: 0 10em;
  position: fixed;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between
  
`;
export const NavTitle = styled.h3`
 letter-spacing: 1rem;
 text-shadow: .1rem .2rem .3rem #000;
`;


export const Ul = styled.ul`
  display: flex;
  align-items: center;


  li {
    list-style: none;
    padding: 1.4em 2.3em;

   
  }

  li a {
    text-decoration: none;
    
    color: ${({theme}) => theme.colors.tetiary1};

    &:hover {
      border-bottom: 2px solid ${({theme}) => theme.colors.tetiary1};
      padding-bottom: .2em;
    }
  }



`;


