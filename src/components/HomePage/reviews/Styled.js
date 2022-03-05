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

  p {
    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-bottom: 4rem;
      margin-top: -0.8rem;
    }
  }
`;

export const SliderContainer = styled.div`
  display: inline-block;
  width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;

export const RightContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  h5 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.8rem;
    }
  }
`;

export const Customers = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 1rem;
  }

  img {
    border-radius: 50%;
    margin-right: 2%;
  }

  h6 {
    font-size: 1.68rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const RightArrow = styled.div`
  height: 6rem;
  border-radius: 50%;
  width: 6rem;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  z-index: 20;
  user-select: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary3};
  box-shadow: 0.1rem 0.3rem 0.3rem #d0d0d0;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary1};
  }

  .icons {
    font-size: 2rem;
    position: absolute;
    top: 35%;
    right: 2rem;
  }
`;

export const LeftArrow = styled.div`
  height: 6rem;
  border-radius: 50%;
  width: 6rem;
  position: absolute;
  bottom: 0rem;
  right: 8rem;
  z-index: 10;
  user-select: none;
  box-shadow: 0.1rem 0.3rem 0.3rem #d0d0d0;
  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary3};

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary1};
  }

  .icons {
    font-size: 2rem;
    position: absolute;
    top: 35%;
    left: 2rem;
  }
`;
