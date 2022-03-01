import React from "react";
import { NavContainer, Links, NavTitle, MenuIcon, ContactUs } from "./Styled";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);

  return (
    <NavContainer>
      <Links>
        <NavTitle href="/">Windec</NavTitle>
        <ul className={onIconClick ? "openMenu" : "closeMenu"}>
          <li>
            <a onClick={closeMenuLink} href="/">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenuLink} href="/about-us">
              About us
            </a>
          </li>
          <li>
            <a onClick={closeMenuLink} href="/portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={closeMenuLink} href="/pricing">
              Pricing
            </a>
          </li>
          <li>
            <ContactUs>
              <a onClick={closeMenuLink} href="/contact-us">
                Contact us
              </a>
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
