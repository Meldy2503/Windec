import styled from "styled-components";

export const Button = styled.a`
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

  @media screen and (max-width: 300px) {
    padding: ${({ mpad }) => mpad || "1.2rem 3.3rem"};
  }
`;
