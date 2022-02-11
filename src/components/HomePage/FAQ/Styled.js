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
      justify-content: space-between;
      border-bottom: 2px solid #eee;
      padding-bottom: 3rem;

     span  {
        display: flex; 
        width: 80%; 

        h5 {
            color: ${({theme}) => theme.colors.primary3}; 
            font-size: 1.7rem; 
            font-weight: 500;
            margin-top: .3rem;
        }

        div {
            padding-left: 7%;
        }

        h6 {
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: .7rem;
        }

        p {
            font-size: 1.6rem;
        }}
`;

export const Icon = styled.div`
   font-size: 2rem;
`;



