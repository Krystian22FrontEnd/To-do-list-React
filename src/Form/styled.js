import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
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
  color: white;
  background-color: teal;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);

    &:active {
      background-color: hsl(180, 100%, 35%);
    }
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    max-width: 600px;
    width: 100%;
    margin-top: 5px;
  }
`;
