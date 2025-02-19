import styled from "styled-components";

export const Title = styled.h1`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 10px 10px;
  }
`;
