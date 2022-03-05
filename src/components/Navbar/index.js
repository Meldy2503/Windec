import React from "react";
import { NavContainer, Links, NavTitle, MenuIcon, ContactUs } from "./Styled";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { Spin as Hamburger } from "hamburger-react";

function NavBar() {
  // const [isOpen, setOpen] = React.useState(false);

  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);

  return (
    <NavContainer>
      <Links>
        <NavTitle href="/">Windec</NavTitle>
        <ul className={onIconClick ? "openMenu" : "closeMenu"}>
          <li>
            <NavLink
              exact
              className="navLink"
              activeClassName="active"
              onClick={closeMenuLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="active"
              onClick={closeMenuLink}
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="active"
              onClick={closeMenuLink}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="active"
              onClick={closeMenuLink}
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <ContactUs>
              <NavLink
                className="navLink"
                activeClassName="active"
                onClick={closeMenuLink}
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </ContactUs>
          </li>
        </ul>

        <MenuIcon onClick={handleClick}>
          {/* <Hamburger onClick={handleClick} toggled={isOpen} toggle={setOpen} /> */}
          {onIconClick ? <AiOutlineClose /> : <FaBars />}
        </MenuIcon>
      </Links>
    </NavContainer>
  );
}

export default NavBar;
