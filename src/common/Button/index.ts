import styled from "styled-components";

export default styled.button`
  border: none;
  font-size: initial;
  color: ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.white};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
