import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border: none;
  color: hsl(180, 100%, 25%);
  background-color: white;
  margin-top: 3px;
  margin-left: 20px;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: gray;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
