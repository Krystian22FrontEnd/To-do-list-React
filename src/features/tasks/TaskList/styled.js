import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 10px 0;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${({theme}) => theme.colors.mercury};
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
      background-color: ${({theme}) => theme.colors.green};
      color: ${({theme}) => theme.colors.white};
      font-size: 120%;

      &:hover {
        background-color: ${({theme}) => theme.colors.lightGreen};
        border: solid 1px ${({theme}) => theme.colors.lightBlack};
        border-radius: 3px;
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: ${({theme}) => theme.colors.red};

      &:hover {
        background-color: ${({theme}) => theme.colors.lightRed};
        border: solid 1px ${({theme}) => theme.colors.lightBlack};
        border-radius: 3px;
      }
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 30px;
    height: 30px;
    padding: 0px;
    flex-shrink: 0;
  }
`;
