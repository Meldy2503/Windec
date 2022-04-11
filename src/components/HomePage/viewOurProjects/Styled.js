import styled from "styled-components";
import img2 from "../../images/img2.svg";
import img3 from "../../images/img3.svg";
import img4 from "../../images/img4.svg";

export const Title = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 10rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding-top: 5rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 3.3rem;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.7rem;
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 450px) {
      width: 50%;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-top: -1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary1};
    }
  }

  li a {
    text-decoration: none;
    margin-right: 1.5rem;
    color: ${({ theme }) => theme.colors.primary1};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary2};
    }
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2.5rem 0 10rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 2rem 0 5rem 0;
  }
`;

export const LeftContent = styled.div`
  width: 65.5%;
  position: relative;
  background: linear-gradient(
      90deg,
      #1c1e53 0%,
      rgba(28, 30, 83, 0.5) 53%,
      transparent 53%
    ),
    url(${img2});
  height: 55rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    background: linear-gradient(
        105deg,
        #1c1e53 -10.96%,
        rgba(28, 30, 83, 0.5) 103.96%
      ),
      url(${img2});
    height: 35rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }

  div {
    position: absolute;
    top: 20rem;
    left: 3rem;
    color: #fff;
    width: 45%;

    @media screen and (max-width: 600px) {
      position: absolute;
      top: 7rem;
      width: 90%;
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 2rem;
      line-height: 1.6;
    }

    p {
      margin-bottom: 2rem;
      line-height: 1.5;
      font-size: 1.4rem;
      width: 90%;
    }

    li {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.secondary2};

      &:hover {
        color: #fff;
      }
    }
  }

  li a {
    text-decoration: none;
    margin-right: 1.3rem;
    color: ${({ theme }) => theme.colors.secondary2};

    &:hover {
      color: #fff;
    }
  }
`;

export const RightContent = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    margin-top: 2.8rem;
    height: fit-content;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 55rem;
  }
`;

export const Img1 = styled.div`
  position: relative;
  background: linear-gradient(
      105deg,
      #1c1e53 -10.96%,
      rgba(28, 30, 83, 0.5) 103.96%
    ),
    url(${img3});
  height: 26.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 48%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  div {
    position: absolute;
    top: 10rem;
    left: 3.5rem;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      position: absolute;
      top: 7rem;
      width: 90%;
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 2rem;
      color: #fff;
      line-height: 1.3;
    }

    li {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.secondary2};

      &:hover {
        color: #fff;
      }
    }

    li a {
      text-decoration: none;
      margin-right: 1.3rem;
      color: ${({ theme }) => theme.colors.secondary2};

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const Img2 = styled.div`
  background: url(${img4});
  height: 26.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 48%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
