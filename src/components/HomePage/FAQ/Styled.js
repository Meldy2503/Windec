import styled from "styled-components";

export const LeftContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  h3 {
    font-size: 3.3rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1.5rem;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.7rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary3};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-top: -1rem;
      margin-bottom: 4rem;
    }
  }
`;

export const RightContent = styled.div`
  width: 60%;
  margin-top: -2rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding: 2rem 0;

  span {
    display: flex;
    width: 80%;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 85%;
    }

    h5 {
      color: ${({ theme }) => theme.colors.primary3};
      font-size: 1.7rem;
      font-weight: 500;
      margin-top: 0.3rem;
    }

    div {
      padding-left: 7%;
    }

    h6 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 0.7rem;

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 1.7;
    }
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
