import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 120%;
  color: ${({ theme }) => theme.colors.white};
  &.active {
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 20px;
  margin-bottom: 35px;
`;

export const Item = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;

  @media (max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  display: block;
  padding: 0 20px;

  @media (max-width: 360px) {
    display: block;
    padding: 10px;
  }
`;
