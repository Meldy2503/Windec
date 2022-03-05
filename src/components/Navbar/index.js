import React from "react";
import { NavContainer, Links, NavTitle, MenuIcon, ContactUs } from "./Styled";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

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
            <NavLink
              end
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <ContactUs>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? "active" : "navLink"
                }
                onClick={closeMenuLink}
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </ContactUs>
          </li>
        </ul>

        <MenuIcon onClick={handleClick}>
          <Hamburger
            onClick={handleClick}
            toggled={onIconClick}
            toggle={setOnIconClick}
          />
        </MenuIcon>
      </Links>
    </NavContainer>
  );
}

export default NavBar;
