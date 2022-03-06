import styled from "styled-components";

export const MainContainer = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 8rem 0;
`;

export const Title = styled.div`
  h2 {
    font-size: 4.5rem;
    font-weight: 600;
    margin-bottom: 3.8rem;
    text-align: center;

    @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 4rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
  }
`;

export const Row = styled.div`
  display: block;
  width: 95%;
  margin: 0 auto;
  height: 58rem;
`;

export const Column = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 33%;
  height: 58rem;
  padding: 1rem 0.7rem;
  background-color: #fff;

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0.5rem;
  }
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  border: 0.05px solid #eee;
  height: 56rem;

  span {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    img {
      max-width: 100%;
      height: 26rem;

      @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 30rem;
      }

      @media screen and (max-width: 500px) {
        height: 26rem;
      }
    }

    h4 {
      font-size: 2.2rem;
      line-height: 1.4;
      padding: 1.5rem 0;
      width: 90%;
      margin: 0 auto;

      @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
        font-size: 2rem;
        padding: 1rem 0;
      }

      @media screen and (max-width: 300px) {
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }

    p {
      line-height: 1.5;
      font-size: 1.6rem;
      width: 90%;
      margin: 0 auto;

      @media screen and (max-width: 300px) {
        font-size: 1.45rem;
      }
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.colorRed3};
    font-size: 1.6rem;
    padding-bottom: 2rem;
    width: 90%;
    margin: 0 auto;
    transition: all 0.3s;

    &:hover,
    &:active {
      color: #333;
      transform: translateY(3px);
    }
  }

  li a {
    text-decoration: none;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.color.colorRed3};
    transition: all 0.3s;

    &:hover,
    &:active {
      color: #333;
    }

    @media screen and (max-width: 300px) {
      font-size: 1.45rem;
    }
  }
`;

export const RightArrow = styled.div`
  height: 6rem;
  border-radius: 50%;
  width: 6rem;
  position: absolute;
  top: 50%;
  right: -6rem;
  z-index: 20;
  user-select: none;
  color: ${({ theme }) => theme.color.colorRed3};
  background-color: #fff;
  box-shadow: 0.1rem 0.3rem 0.3rem #d0d0d0;
  cursor: pointer;

  .icons {
    font-size: 2rem;
    position: absolute;
    top: 35%;
    right: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    right: -5rem;
    height: 5rem;
    width: 5rem;

    .icons {
      position: absolute;
      right: 1.5rem;
    }
  }
`;

export const LeftArrow = styled.div`
  height: 6rem;
  border-radius: 50%;
  width: 6rem;
  position: absolute;
  top: 50%;
  left: -6rem;
  z-index: 10;
  user-select: none;
  color: ${({ theme }) => theme.color.colorRed3};
  background-color: #fff;
  box-shadow: 0.1rem 0.3rem 0.3rem #d0d0d0;
  cursor: pointer;

  .icons {
    font-size: 2rem;
    position: absolute;
    top: 35%;
    left: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    left: -5rem;
    height: 5rem;
    width: 5rem;

    .icons {
      position: absolute;
      left: 1.5rem;
    }
  }
`;
