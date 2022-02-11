import styled from "styled-components";

export const LeftContent = styled.div`
       width: 30%;
       display: flex;
       flex-direction: column;

       h3 {
           font-size: 2.8rem;
           font-weight: 600;
           line-height: 1.3;
           margin-bottom: 1.5rem;
       }

       a {
           color: ${({theme}) => theme.colors.primary3};
           text-decoration: none;
       }
`;

export const RightContent = styled.div`
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.4;
      }

`;

