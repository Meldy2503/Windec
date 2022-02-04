import React from 'react';
import { NavContainer, Nav, NavTitle, MenuIcon, Ul } from "../styles/NavbarStyled";
import { Button } from "../styles/ButtonStyled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function Navbar() {
   
  const [onClick, setOnClick] = React.useState(false);
  const handleClick = () => setOnClick(!onClick);

  return (
  <NavContainer>
     <Nav>
      <NavTitle>Windec</NavTitle>

      <MenuIcon onClick={handleClick}>
         { onClick ? <AiOutlineClose /> : <FaBars /> }
      </MenuIcon>

        <Ul>
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
        </Ul>
        </Nav> 
        
  </NavContainer>
  )
}

export default Navbar;
