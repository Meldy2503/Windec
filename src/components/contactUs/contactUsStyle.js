import styled from "styled-components";

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0;
`;

export const Title = styled.div`
  text-align: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
  }

  h2 {
    font-size: 3.3rem;
    font-weight: 600;
    padding: 1.3rem 0;
    margin: 0 auto;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.7rem;
    }
  }

  p {
    margin-bottom: 5rem;
    line-height: 1.6;
  }
`;

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.primary5};
  padding: 6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 2rem;
  }

  label {
    font-size: 1.8rem;
    display: inline-block;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 4rem;
    border-radius: 0.5rem;
    resize: none;
    outline: none;
    font-size: 1.6rem;
    box-shadow: 0.1rem 0.1rem 0.2rem #d0d0d0;
    padding: 2rem;
    font-family: "Poppins", sans-serif;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary1};
      opacity: 0.8;
      font-size: 1.6rem;
    }

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
      background-color: transparent;
    }
  }

  .errors {
    color: red;
    font-size: 1.5rem;
    margin-top: -2.8rem;
    padding-left: 1rem;
  }

  span {
    margin: 2rem 0 5rem 0;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin: 0 auto;
    }
  }
`;

export const FormContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 47%;
  display: flex;
  height: 13rem;
  margin-bottom: 2rem;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: 3rem;
    padding: 2rem;
    border-radius: 0.5rem;
    outline: none;
    height: 6rem;
    font-size: 1.6rem;
    box-shadow: 0.1rem 0.1rem 0.1rem #d0d0d0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary1};
      opacity: 0.8;
      font-size: 1.5rem;
      font-family: "Poppins", sans-serif;
    }

    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary1};
    }

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 1rem;
    }
  }
`;
