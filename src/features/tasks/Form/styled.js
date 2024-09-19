import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px 20px;
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  max-width: 600px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 10px;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.teal};
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({theme}) => theme.colors.persianGreen};
    transform: scale(1.1);

    &:active {
      background-color: ${({theme}) => theme.colors.bondiBlue};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-grow: 1;
    max-width: 600px;
    width: 100%;
    margin-top: 5px;
  }
`;
