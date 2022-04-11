import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 3rem;
  font-size: 1.6rem;
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1.4rem 3.3rem"};
  background-color: ${({ bgc }) => bgc || "#FCD980"};
  color: ${({ color }) => color || "#1B1C2B"};
  margin: ${({ margin }) => margin || "none"};
  text-decoration: none;

  &:hover {
    border: ${({ bh }) => bh || "none"};
    background-color: ${({ bgh }) => bgh || "#FDE4A6"};
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: ${({ mopad }) => mopad || "1.3rem 3.3rem"};
  }

  @media screen and (max-width: 330px) {
    padding: ${({ mpad }) => mpad || "1.1rem 1rem"};
    font-size: 1.3rem;
  }
`;
