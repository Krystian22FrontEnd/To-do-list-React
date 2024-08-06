import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 10px 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  margin: 0 40px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-basis: 90%;
  align-self: center;

  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  flex-basis: 35px;
  height: 35px;
  margin: 0 10px;
  flex-shrink: 0;
  border: none;
  transition: 0.3s;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: hsl(120, 93%, 35%);
      color: white;
      font-size: 120%;

      &:hover {
        background-color: hsl(120, 93%, 40%);
        border: solid 1px hsl(0, 3%, 20%);
        border-radius: 3px;
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(0, 98%, 45%);

      &:hover {
        background-color: hsl(0, 100%, 55%);
        border: solid 1px hsl(0, 3%, 20%);
        border-radius: 3px;
      }
    `}

    @media(max-width: 768px) {
    width: 30px;
    height: 30px;
    padding: 0px;
    flex-shrink: 0;
  }
`;
