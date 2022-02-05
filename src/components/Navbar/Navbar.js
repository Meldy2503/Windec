import React from 'react';
import { NavContainer, Nav, NavTitle, MenuIcon } from "../Navbar/NavbarStyled";
import { Button } from "../styles/ButtonStyled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function Navbar() {

  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);

  return (
  <NavContainer>
     

   <Nav>

   <NavTitle>Windec</NavTitle>

        <ul className={onIconClick ? 'openMenu' : 'closeMenu' }>
          <li>
            <Link onClick={closeMenuLink} to="/">Home</Link> 
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/">About us</Link>
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/">Features</Link>
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/">Pricing</Link>
          </li>
          <div>
          <Button
          border= "2px solid #F4F6FC33"
          bgc= "#1C1E53"
          color= "#fff" 
          bgh= "#1C1E53"
          bh= " 2px solid #fff"
          margin= "0 1.5em"
          onClick={closeMenuLink}
          >Contact us</Button>
          </div>
        </ul>

        <MenuIcon onClick={handleClick}>
         { onIconClick ? <AiOutlineClose /> : <FaBars /> }
      </MenuIcon>

        </Nav> 
        
  </NavContainer>
  )
}

export default Navbar;
