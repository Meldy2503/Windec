import styled from "styled-components";

export const MainContainer = styled.section`
  background-color: ${({ bgco }) => bgco || "#F4F6FC"};
  color: ${({ co }) => co || "#282938"};
  width: 100%;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  max-width: 120rem;
  width: 90%;
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexd }) => flexd || "none"};
  justify-content: space-between;
  margin: 0 auto;
  padding-top: ${({ pt }) => pt || "10rem"};
  padding-bottom: ${({ pb }) => pb || "10rem"};
  position: ${({ position }) => position || "none"};
  background-color: ${({ bgcon }) => bgcon || "transparent"};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    padding-top: ${({ mpt }) => mpt || "5rem"};
    padding-bottom: ${({ mpb }) => mpb || "5rem"};
  }
`;
