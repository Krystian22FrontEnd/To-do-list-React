import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.dirtyWhite};
  margin: 5px 0;
  box-shadow: 3px -3px 10px 1px hsl(0deg 2.77% 80%);
  display: grid;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.dirtyWhite};
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
