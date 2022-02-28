import React from "react";
import { NavContainer, Links, NavTitle, MenuIcon, ContactUs } from "./Styled";
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
        <ul className={onIconClick ? "openMenu" : "closeMenu"}>
          <li>
            <Link onClick={closeMenuLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/about-us">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={closeMenuLink} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <ContactUs>
              <Link onClick={closeMenuLink} to="/contact-us">
                Contact us
              </Link>
            </ContactUs>
          </li>
        </ul>

        <MenuIcon onClick={handleClick}>
          {onIconClick ? <AiOutlineClose /> : <FaBars />}
        </MenuIcon>
      </Links>
    </NavContainer>
  );
}

export default NavBar;
