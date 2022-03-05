import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary2};
  position: fixed;
  height: 7.1rem;
  z-index: 1500;
`;

export const Links = styled.nav`
  max-width: 120rem;
  width: 90%;
  background-color: transparent;
  margin: 0 auto;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2000;

  .openMenu {
    display: none;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: flex;
      flex-direction: column;
      background-color: #000033;
      opacity: 0.98;
      position: absolute;
      top: 7.1rem;
      right: -10%;
      width: 70%;
      height: 100vh;
      z-index: 1000;
      overflow: scroll;
    }
  }

  .closeMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }
  }

  li {
    list-style: none;
    margin: 1.4rem 1.6rem;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.colors.tetiary1};
      display: block;
      margin: 1.4rem 1rem;
      overflow: scroll;

      &:hover {
        color: #fff;
      }
    }
  }

  .navLink {
    text-decoration: none;
    color: #fff;
    opacity: 0.6;

    &:hover {
      color: #fff;
    }
  }

  .active {
    text-decoration: none;
    color: #fff;
    opacity: 1;
  }
`;

export const ContactUs = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  border: 2px solid #f4f6fc33;
  padding: 1rem 3rem;
  border-radius: 3rem;

  &:hover {
    border: 2px solid #fff;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    background-color: transparent;
    border: none;
    padding: 0rem;
    overflow: scroll;

    &:hover {
      color: #fff;
      border: none;
    }
  }
`;

export const NavTitle = styled(Link)`
  display: block;
  letter-spacing: 0.7rem;
  text-shadow: 0.1rem 0.2rem 0.3rem #000;
  font-size: 2.5rem;
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(1%, 50%);
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    font-size: 3.3rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-1%, 25%);
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.8rem;
    }
  }
`;
