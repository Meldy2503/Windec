import React from 'react';
import { NavContainer, Nav, NavTitle, MenuIcon } from "../styles/NavbarStyled";
import { Button } from "../styles/ButtonStyled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function Navbar() {
   
  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);

  return (
  <NavContainer>
     

   <Nav>
   <NavTitle>Windec</NavTitle>

      <MenuIcon onClick={handleClick}>
         { onIconClick ? <AiOutlineClose /> : <FaBars /> }
      </MenuIcon>

        <ul className={onIconClick ? 'openMenu' : 'closeMenu' } onClick={handleClick}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <div>
          <Button>Contact us</Button>
          </div>
        </ul>
        </Nav> 
        
  </NavContainer>
  )
}

export default Navbar;
