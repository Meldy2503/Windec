import styled from "styled-components";

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: 10rem 0;
`;

export const Title = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 70%;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
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
  }
`;

export const FormContents = styled.form`
  margin-right: 0.8em;
  padding: 0.5em;
  margin-top: 0.4em;

  label {
    font-size: 2rem;
  }

  input {
    padding: 0.7em;
    margin: 1em 0 1em 0.3em;
    width: 100%;
    max-width: 400px;
    border-radius: 3px;
    box-shadow: 0.5px 1px 2px #000;
    border-style: none;
    font-size: 1rem;
  }
  @media only screen and (max-width: 500px) {
    input {
      padding: 0.6em;
      font-size: 0.9rem;
    }
  }

  input:focus {
    outline: none;
    border-bottom: 3px solid #ecae10;
  }

  .errors {
    color: red;
    font-size: 0.9rem;
    margin-top: -0.9em;
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    .errors {
      font-size: 0.7rem;
    }
  }
`;
