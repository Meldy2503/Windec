import styled from "styled-components";

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
  width: 80%;
  margin: 0 auto;
  height: 58rem;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding: 1rem 0.7rem;
  background-color: #fff;
  margin: 0 auto;

  img {
    height: 100%;
    width: 22%;
  }
`;
