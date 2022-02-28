import styled from "styled-components";

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    padding: 6rem 0 10rem 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: block;
    padding: 5rem 0;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 3.3rem;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.7rem;
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.8;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin-top: -0.7rem;
    }
  }

  li {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary3};

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin-bottom: 4rem;
    }
  }

  li a {
    text-decoration: none;
    margin-right: 1.5rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary3};

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin-right: 0.5rem;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  row-gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  span {
    width: 45%;
    height: 45%;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    .square1 {
      width: 5rem;
      height: 5rem;
      background-color: ${({ theme }) => theme.colors.primary3};
      margin-bottom: 1.7rem;
      border-radius: 1.1rem 1.1rem 1.1rem 1.5rem;
      position: relative;

      .square3 {
        width: 2.9rem;
        height: 3rem;
        background-color: ${({ theme }) => theme.colors.secondary1};
        border-radius: 0 0 0 1.1rem;
        position: absolute;
        left: 0;
        bottom: 0rem;

        .square2 {
          width: 4.1rem;
          height: 4.2rem;
          background-color: ${({ theme }) => theme.colors.primary6};
          border-radius: 0 1.1rem 0 1.3rem;
          position: absolute;
          top: -2rem;
          right: -2rem;

          .square4 {
            width: 2.5rem;
            height: 2rem;
            position: absolute;
            top: 1rem;
            left: 0.6rem;

            p {
              color: #fff;
            }
          }
        }
      }
    }

    h3 {
      margin: 0.5rem 0;
      font-size: 2.5rem;
      font-weight: 500;

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 2rem;
        font-weight: 600;
      }

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.8rem;
      }
    }

    p {
      line-height: 1.8;
    }
  }
`;
