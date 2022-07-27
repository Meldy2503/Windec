import styled from "styled-components";

export const AlertStyle = styled.div`
  position: fixed;
  width: 32rem;
  top: 8rem;
  right: 2rem;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1c1e53;
  color: #fff;
  border-radius: 0.5rem;
  animation: slideIn 2s ease-in;

  @media (max-width: 500px) {
    width: 30rem;
  }

  @media (max-width: 340px) {
    width: 95%;
    right: 0.5rem;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }

    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: 2.2rem 0.6rem;
    line-height: 1.7rem;

    @media (max-width: 500px) {
      padding: 1.7rem 0.6rem;
    }

    @media (max-width: 340px) {
      padding: 1.2rem 0.6rem;
    }
  }
`;
