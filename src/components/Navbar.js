import React from 'react';
import { NavContainer, NavTitle, Ul } from "../styles/NavbarStyled";
import { Button } from "../styles/ButtonStyled";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  
  <NavContainer>
      <NavTitle>Windec</NavTitle>

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

        
  </NavContainer>
  )
}

export default Navbar;
