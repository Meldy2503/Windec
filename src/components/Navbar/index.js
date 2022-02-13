import React from 'react';
import { NavContainer, Links, NavTitle, MenuIcon, ContactUs } from "./Styled";
import { Button } from "../reusableComponents/ButtonStyled";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function NavBar() {

  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);

  return (
  <NavContainer>
      <Links>
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
                <li>
                    <Link onClick={closeMenuLink} to="/">Contact us</Link>
                </li>
                {/* <ContactUs>
                    <Button
                       border= "2px solid #F4F6FC33"
                       bgc= "#1C1E53"
                       color= "#fff" 
                       bgh= "#1C1E53"
                       bh= "2px solid #F4F6FC"
                       padding= "1rem 2.9rem"
                       onClick={closeMenuLink}
                    >Contact us</Button>
                </ContactUs> */}
            </ul>

        <MenuIcon onClick={handleClick}>
            { onIconClick ? <AiOutlineClose /> : <FaBars /> }
        </MenuIcon>
    </Links> 
</NavContainer>
  )}


  

export default NavBar;
